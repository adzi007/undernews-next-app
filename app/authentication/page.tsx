import React from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route';

import { createUserMutation, getUserByEmail } from '@/services/graphqlService';
// import RedirectAuth from '../components/auth/RedirectAuth';
import { useRouter, redirect } from 'next/navigation';


enum AuthProvider {
    google = "google",
    email = "email",
}

type ProfileData = {
    name: string;
    email: string;
    image:string;
};

interface UserAccountCreate {

  fullname: string;
  email: string;
  avatar:string;
  extDbId: string;
  authProvider: AuthProvider;
  isActive: boolean;
}

interface CheckUserResponse {
  data: {
    userAccounts: {
      id: string;
      fullname: string;
    }[]
  }
}

const Authentication  = async () => {

  const session = await getServerSession(authOptions)


  if(session){
    
    let userCek: CheckUserResponse = await getUserByEmail(session.user?.email ?? "")

    console.log('userCekxxxxxx >>>>>>> >>>>>>> >>>>>>> >>>>>>>', userCek);
    
    
    if(userCek.data.userAccounts.length === 0) {

      const newUser: UserAccountCreate = {
        fullname: session?.user?.name ?? "",
        email: session?.user?.email ?? "",
        avatar: session?.user?.image ?? "",
        authProvider: AuthProvider.google,
        isActive: true,
        extDbId: ""
      }
  
      let response    = await createUserMutation(newUser); 

      if(response){

        redirect('/')

      }

    }else{

      redirect('/')

    }
    
    
  }
    

  return (
    <div>
      processing....... 
      {/* <RedirectAuth /> */}
    </div>
  )
}



export default Authentication