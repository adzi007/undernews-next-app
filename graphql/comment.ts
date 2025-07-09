import { gql } from '@apollo/client';

export const MUTATION_CREATE_COMMENT = gql`

    mutation CreateComment($content: String!, $userId: ID!, $postId: ID!){

        createComment(data: {
            content: $content,
            userAccount: {
                connect: {
                    id: $userId
                }
            }
            post: {
                connect:{
                    id: $postId
                }
            }
            
        }){
            id
        }

    }

`

export const MUTATION_PUBLISH_COMMENT = gql`

    mutation PublishComment($id: ID!){

        publishComment(where:{
            id: $id
        }){
            id
        }

    }

`

export const MUTATION_CREATE_REPLY = gql`

    mutation CreateReply($content: String!, $userId: ID!, $commentId: ID!){

        createReply(data: {
            content: $content,
                userAccount:{
                connect:{
                    id: $userId
                }
            }
            comment: {
                connect: {
                    id: $commentId
                }
            }
        }) {
            id
        }

    }

`

export const MUTATION_PUBLISH_REPLY = gql`

    mutation PublishReply($id: ID!){

        publishReply(where:{
            id: $id
        }){
            id
            publishedAt
        }

    }

`

export const MUTATION_CREATE_SUBREPLY = gql`

    mutation CreateReply($content: String!, $userId: ID!, $commentId: ID!, $replyId: ID!){

        createReply(data:{
            content: $content,
            userAccount:{
                connect:{
                    id: $userId
                }
            }
            comment: {
                connect: {
                    id: $commentId
                }
            }
            parentReply:{
                connect: {
                    id: $replyId
                }
            }
        }) {
            id
        }

    }

`

export const MUTATION_LIKE_COMMENT = gql`

    mutation CreateCommentResponse($userId: ID!, $commentId: ID!){

        createCommentResponse(
            data: {
            isLike: true, 
            isDislike: false, 
            userAccount: {
                connect: {
                    id: $userId
                }
            }, 
            comment: {
                connect: {
                    id: $commentId
                }
            }
            }
        ) {
            id
        }

    }

`

export const MUTATION_LIKE_COMMENT_PUBLISH = gql`

    mutation PublishCommentResponse($commentResId: ID!){

        publishCommentResponse(where: {id: $commentResId}){
            id
        }

    }

`

export const MUTATION_LIKE_COMMENT_DELETE = gql`

    mutation DeleteCommentResponse($id: ID!){

        deleteCommentResponse(where: {id: $id}){
            id
        }

    }

`

// ----------------------------------------------------
// REPLY
// ----------------------------------------------------

export const MUTATION_LIKE_REPLY = gql`

    mutation CreateReplyResponse($userId: ID!, $replyId: ID!){

        createReplyResponse(
            data: {
            userAccount: {
                connect: {
                    id: $userId
                }
            }, 
            isLike: true, 
            reply: {
                connect: {
                    id: $replyId
                }
            }
            }
        ) {
            id
        }

    }

`

export const MUTATION_LIKE_REPLY_PUBLISH = gql`

    mutation PublishReplyResponse($replyId: ID!){

        publishReplyResponse(where:{ id: $replyId }){
            id
        }

    }

`

export const MUTATION_LIKE_REPLY_DELETE = gql`

    mutation DeleteCommentResponse($id: ID!){

        deleteReplyResponse(where: {id: $id}) {
            id
        }

    }

`