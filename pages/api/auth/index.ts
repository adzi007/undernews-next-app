
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserByEmail } from '@/services/graphqlService';
import { createApolloClient } from '@/lib/apolloClient'; 
import { GET_USER_BY_EMAIL, MUTATION_CREATE_USER, MUTATION_PUBLISH_USER } from '@/graphql/user';
// import { useMutation } from '@apollo/client';
import { grafbase } from "@/lib/apolloClient";

interface RequestBody {
    email: string;
    name: string;
    avatar: string;
}

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

interface TestResponse {
    msg: string
}

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<TestResponse>) => void;



const POST: NextApiHandler = async (req, res) => {

    const { email, fullname, avatar } = req.body

    const apolloClient = createApolloClient();

    const { data } = await apolloClient.query({
      query: GET_USER_BY_EMAIL,
      variables: {
        email
      }, 
    });

    if (data.userAccounts.length == 0) {

        const userCreate = {
            fullname: fullname,
            email: email,
            avatar: avatar,
            authProvider: AuthProvider.google,
            isActive: true,
            extDbId: ""
        }
        
        const { data: dataResultCreate } = await apolloClient.mutate({
            mutation: MUTATION_CREATE_USER,
            variables: userCreate,
        
        });

        const userId = dataResultCreate.createUserAccount.id

        const { data: dataResultPublish } = await apolloClient.mutate({
            mutation: MUTATION_PUBLISH_USER,
            variables: {
                id: userId
            },
        
        });        
        
    }
    
    res.status(200).json({
        msg: "Success Chekin Authentification"
    });

  };
  
export default POST;