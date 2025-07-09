
import { NextApiRequest, NextApiResponse } from 'next';
import { grafbase } from '@/lib/apolloClient';
import { MUTATION_CREATE_SUBREPLY, MUTATION_PUBLISH_REPLY } from '@/graphql/comment';

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

    const { content, userId, commentId, replyId } = req.body

    const subReplyInsert = {
        content: content, 
        userId: userId, 
        commentId: commentId,
        replyId: replyId
    }

    const subReplyCreated: ResponseReply = await grafbase.request(MUTATION_CREATE_SUBREPLY, subReplyInsert)

    await grafbase.request(MUTATION_PUBLISH_REPLY, {
        id: subReplyCreated.createReply.id
    })
    
    res.status(200).json({
        msg: "Success Created Sub Reply"
    });

};
  
export default POST;