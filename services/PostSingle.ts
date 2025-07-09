import { getClient as graphcms } from "@/lib/client";
import { GET_POST_COMMENTS, GET_POST_SINGLE } from "@/graphql/post"
import { useQuery } from "@apollo/client";

interface NewsSingle {
    data: {
        post:{
            id: string;
            title: string;
            publishAt: string;
            author: Author;
            thumbnail: Thumbnail;
            content: Content;
            category: Category;
            relatedNews: RelatedNews;

        }
    }
    
}

interface Author {
    name: string;
}

interface Thumbnail {
    url: string;
}

interface Content {
    html: string;
}

interface Category {
    name: string;
    parentCategory?: ParentCategory;
}

interface ParentCategory {
    name: string;
}

interface RelatedNews {
    posts: RelatedPost[];
}

interface RelatedPost {
    title: string;
    slug: string;
    category: {
        slug: string;
    };
}

interface PostResponses {
    isLike: boolean;
    isDisLike: boolean;
}

interface Comment {
    userAccount: UserAccount;
    content: string;
    commentResponses: CommentResponse[];
    replies: Reply[];
}

interface UserAccount {
    fullname: string;
    avatar: string;
}

interface CommentResponse {
    isLike: boolean;
    isDislike: boolean;
    userAccount: {
        id: string;
    };
}

interface Reply {
    userAccount: {
    fullname: string;
};
content: string;
    replyResponses: ReplyResponse[];
}

interface ReplyResponse {
    isLike: boolean;
    isDislike: boolean;
    userAccount: {
        id: string;
    };
}

export const getPostSingle = async (slug: string) => {

    const post:NewsSingle  = await graphcms().query({
       query: GET_POST_SINGLE,
       variables:{
        slug:slug
       }
    })

    return post

}

