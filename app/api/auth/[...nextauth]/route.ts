import { SupabaseAdapter } from "@auth/supabase-adapter";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { insertUserAccount } from "@/services/graphqlService";
import { NextAuthOptions } from "next-auth";
import type { User } from 'next-auth'

enum AuthProvider {
  google = "google",
  email = "email",
}
interface UserAccountCreate {

  fullname: string;
  email: string;
  avatar:string;
  extDbId: string;
  authProvider: AuthProvider;
  isActive: boolean;
}

declare module "next-auth" {
  interface JWT {
    id: string
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string
    }
  }
}

export const authOptions:NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. "Sign in with...")
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
    //     if (user) {
    //       // Any object returned will be saved in `user` property of the JWT
    //       return user
    //     } else {
    //       // If you return null then an error will be displayed advising the user to check their details.
    //       return null
  
    //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    //     }
    //   }
    // })
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  }) as Adapter,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      // console.log('log in >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

      // console.log('user', user);
      // console.log('account', account);
      // console.log('profile', profile);
      // console.log('email', email);
      // console.log('credentials', credentials);

      const baseUrl = process.env.BASE_URL;

      await fetch(`${baseUrl}/api/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          fullname: user.name,
          avatar: user.image
        })
      });
      
      // const authres = await res.json();

      // console.log('authres>>>>>>>>>>>>>', authres);
      
      return true
    },
    async session({ session, user, token }) {

      try {
        const baseUrl = process.env.BASE_URL;
        const email = session?.user?.email;
    
        if (!email) {
          throw new Error("Session user email not available.");
        }
    
        const res = await fetch(`${baseUrl}/api/user?email=${email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        const userres = await res.json();

        // console.log('userres>>>>>>>>', userres);
        
        const userId = userres.userAccounts[0].id;
    
        session.user.id = userId;
    
        return session;

      } catch (error) {

        // console.log('error>>>>>>>>', error);
        
        // Handle error here or rethrow to propagate it
        throw error;
      }
    },
    
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };