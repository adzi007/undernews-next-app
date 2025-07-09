import { NextApiRequest, NextApiResponse } from 'next';
import { createApolloClient } from '@/lib/apolloClient'; 
import { GET_POST_COMMENTS, GET_POST_COMMENTS_USER } from '@/graphql/post';

interface Data {
  message: string;
}

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => void;

const POST: NextApiHandler = async (req, res) => {

    const slug = req.body.slug
    const userId = req.body.userId

    const apolloClient = createApolloClient();

    const { data } = await apolloClient.query({
      query: GET_POST_COMMENTS_USER,
      variables: {
        slug,
        userId
      },
    });

    res.status(200).json(data);

};
  
export default POST;