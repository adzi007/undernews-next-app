
import { NextApiRequest, NextApiResponse } from 'next';
import { insertUserAccount } from '@/services/graphqlService';

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

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<UserAccountCreate>) => void;



const POST: NextApiHandler = async (req, res) => {


    const body: UserAccountCreate = await req.body

    let response    = await insertUserAccount(body);

    // console.log('bodyccccccccccc', body);
    // console.log('response crete user lalalalla', response);
    

    res.status(200).json(body);

  };
  
export default POST;