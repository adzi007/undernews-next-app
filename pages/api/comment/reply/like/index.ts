
import { NextApiRequest, NextApiResponse } from 'next';
import { grafbase } from '@/lib/apolloClient';
import { MUTATION_LIKE_REPLY, MUTATION_LIKE_REPLY_DELETE, MUTATION_LIKE_REPLY_PUBLISH } from '@/graphql/comment';

interface ResponseComment {
    createReplyResponse: {
        id: string;
    }
}

interface TestResponse {
    msg: string
}

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<TestResponse>) => void;

const POST: NextApiHandler = async (req, res) => {

    const { userId, replyId, isLike, id } = req.body

    if(isLike){

        const createLikeComment = {
            userId,
            replyId
        }
    
        const createdLikeComment: ResponseComment = await grafbase.request(MUTATION_LIKE_REPLY, createLikeComment)
    
        await grafbase.request(MUTATION_LIKE_REPLY_PUBLISH, {
            replyId: createdLikeComment.createReplyResponse.id
        })
        
        res.status(200).json({
            msg: "Success like reply"
        });

    }else {

        await grafbase.request(MUTATION_LIKE_REPLY_DELETE, {
            id
        })

        res.status(200).json({
            msg: "Success unlike reply"
        });

    }

    

};
  
export default POST;