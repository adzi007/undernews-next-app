
import { NextApiRequest, NextApiResponse } from 'next';
import { grafbase } from '@/lib/apolloClient';
import { MUTATION_LIKE_COMMENT_DELETE} from '@/graphql/comment';


interface TestResponse {
    msg: string
}

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<TestResponse>) => void;

const POST: NextApiHandler = async (req, res) => {

    const { id } = req.body

    await grafbase.request(MUTATION_LIKE_COMMENT_DELETE, {
        id
    })
    
    res.status(200).json({
        msg: "Success Delete Like Comment"
    });

};
  
export default POST;