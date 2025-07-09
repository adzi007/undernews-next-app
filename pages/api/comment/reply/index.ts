
import { NextApiRequest, NextApiResponse } from 'next';
import { grafbase } from '@/lib/apolloClient';
import { MUTATION_CREATE_REPLY, MUTATION_PUBLISH_REPLY } from '@/graphql/comment';

interface ResponseReply {
    createReply: {
        id: string;
    }
}

interface TestResponse {
    msg: string
}

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<TestResponse>) => void;

const POST: NextApiHandler = async (req, res) => {

    const { content, userId, commentId } = req.body

    const commentInsert = {
        content: content, 
        userId: userId, 
        commentId: commentId
    }

    const createdComment: ResponseReply = await grafbase.request(MUTATION_CREATE_REPLY, commentInsert)

    await grafbase.request(MUTATION_PUBLISH_REPLY, {
        id: createdComment.createReply.id
    })
    
    res.status(200).json({
        msg: "Success Created Reply"
    });

};
  
export default POST;