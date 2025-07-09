
import { NextApiRequest, NextApiResponse } from 'next';
import { grafbase } from '@/lib/apolloClient';
import { MUTATION_LIKE_COMMENT, MUTATION_LIKE_COMMENT_PUBLISH } from '@/graphql/comment';

interface ResponseComment {
    createCommentResponse: {
        id: string;
    }
}

interface TestResponse {
    msg: string
}

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<TestResponse>) => void;

const POST: NextApiHandler = async (req, res) => {

    const { userId, commentId } = req.body

    const createLikeComment = {
        userId,
        commentId
    }

    const createdLikeComment: ResponseComment = await grafbase.request(MUTATION_LIKE_COMMENT, createLikeComment)

    await grafbase.request(MUTATION_LIKE_COMMENT_PUBLISH, {
        commentResId: createdLikeComment.createCommentResponse.id
    })
    
    res.status(200).json({
        msg: "Success Created Comment"
    });

};
  
export default POST;