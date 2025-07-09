import { NextApiRequest, NextApiResponse } from 'next';
// import { getPostSingle } from '@/services/PostSingle';
import { createApolloClient } from '@/lib/apolloClient'; 
import { GET_POST_COMMENTS } from '@/graphql/post';
import { GET_USER_BY_EMAIL } from '@/graphql/user';
interface Data {
  message: string;
}

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => void;


const handler: NextApiHandler = async (req, res) => {

    const email = req.query.email

    const apolloClient = createApolloClient();

    const { data } = await apolloClient.query({
      query: GET_USER_BY_EMAIL,
      variables: {
        email
      }, // If your query requires any variables
    });

    res.status(200).json(data);
  };
  
export default handler;