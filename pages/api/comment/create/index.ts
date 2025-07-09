
import { NextApiRequest, NextApiResponse } from 'next';
import { grafbase } from '@/lib/apolloClient';
import { MUTATION_CREATE_COMMENT, MUTATION_PUBLISH_COMMENT } from '@/graphql/comment';

interface ResponseComment {
    createComment: {
        id: string;
    }
}

interface TestResponse {
    msg: string
}

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<TestResponse>) => void;

const POST: NextApiHandler = async (req, res) => {

    const { content, userId, postId } = req.body

    const commentInsert = {
        content: content, 
        userId: userId, 
        postId: postId
    }

    const createdComment: ResponseComment = await grafbase.request(MUTATION_CREATE_COMMENT, commentInsert)

    await grafbase.request(MUTATION_PUBLISH_COMMENT, {
        id: createdComment.createComment.id
    })
    
    res.status(200).json({
        msg: "Success Created Comment"
    });

};
  
export default POST;