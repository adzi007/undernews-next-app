interface UserAccount {
  fullname: string;
  avatar: string;
}

interface CommentResponse {
  isLike: boolean;
  isDislike: boolean;
}

interface ReplyResponse {
  isLike: boolean;
  isDislike: boolean;
}

interface Reply {
  userAccount: UserAccount;
  content: string;
  replyResponses: ReplyResponse[];
}

interface Comment {
  userAccount: UserAccount;
  content: string;
  commentResponses: CommentResponse[];
  replies: Reply[];
}

interface PostResponses {
  isLike: boolean;
  isDisLike: boolean;
}

interface PostCommentResponse {
    post: {
        postResponses: PostResponses;
        comments: Comment[];
    }
  
}

export default PostCommentResponse;
