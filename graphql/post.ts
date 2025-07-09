import { gql } from '@apollo/client';

export const QUERY_POSTS_HOME = gql`

    query Posts {

        postHeadlines{
            datePublish
            title
            posts{
                title
                slug
                thumbnail{
                    url
                }
                category{
                    name
                    slug
                }
                datePublished
            }
        }
        posts(orderBy: publishedAt_DESC, stage: PUBLISHED, first: 12, skip: 0) {
            title
            slug
            thumbnail{
                url
            }
            publishAt
            category{
                name
                slug
            }
            publishAt
        }
    }

`

export const GET_POST_SINGLE = gql`
    query GetPostSingle($slug: String!){
        post(
            where:{ 
            slug: $slug
            }
        ){
            id
            title
            publishAt
            author{
                name
            }
            thumbnail{
                url
            }
            content{
                html
            }
            category{
                name
                parentCategory{
                    name
                }
            }
            relatedNews{
                posts{
                    title
                    slug
                    category{
                        slug
                    }
                }
            }
        }
    }
`

export const GET_POST_COMMENTS = gql`

    query GetPosComments($slug: String!){
        post(
            where:{ 
                slug: $slug
            }
        ){
            postResponses {
                isLike
                isDisLike
                
            }
            comments(orderBy: publishedAt_DESC){
                id
                createdAt
                userAccount {
                    fullname
                    avatar
                }
                content
                commentResponses {
                    id
                    isLike
                    userAccount{
                        id
                    }
                }
                replies {
                    id
                    createdAt
                    userAccount {
                        fullname
                        avatar
                    }
                    content
                    replyResponses {
                        isLike
                        isDislike
                    }
                    parentReply{
                        userAccount{
                            fullname
                        }
                    }
                }
                
            }
        }
        commentsConnection{
            pageInfo {
                hasNextPage
            }
            aggregate {
                count
            }
        }
    }
`

export const GET_POST_COMMENTS_USER = gql`

    query GetPosComments($slug: String!, $userId: ID!){
        post(
            where:{ 
                slug: $slug
            }
        ){
            postResponses {
                isLike
                isDisLike
                
            }
            comments(orderBy: publishedAt_DESC){
                id
                createdAt
                userAccount {
                    fullname
                    avatar
                }
                content
                commentResponses(where: {
                    userAccount: {
                        id: $userId
                    }
                }) {
                    id
                }
                replies {
                    id
                    createdAt
                    userAccount {
                        fullname
                        avatar
                    }
                    content
                    replyResponses(where: {userAccount: {id: $userId }}) {
                        id
                    }
                    parentReply{
                        userAccount{
                            fullname
                        }
                    }
                }
                
            }
        }
        commentsConnection{
            pageInfo {
                hasNextPage
            }
            aggregate {
                count
            }
        }
    }
`

export const GET_POST_INDEXES = gql`
    query GetPostIndexes($limit: Int!, $start: Int!){
            posts(
                orderBy: publishedAt_DESC, 
                stage: PUBLISHED,
                first: $limit,
                skip: $start
            ){
                title
                slug
                thumbnail{
                    url
                }
                publishAt
                category{
                    name
                    slug
                }
                publishAt
            }
            postsConnection{
                pageInfo{
                hasPreviousPage
                hasNextPage
                }
                aggregate {
                    count
                }
            }
    }
`

export const GET_POST_INDEXES_CATEGORY = gql`
    query GetPostIndexes($limit: Int!, $start: Int!, $category: [String]!){
            posts(
                orderBy: publishedAt_DESC, 
                stage: PUBLISHED,
                first: $limit,
                skip: $start,
                where: {
                    category: {
                        slug_in: $category
                    }
                }
            ){
                title
                slug
                thumbnail{
                    url
                }
                publishAt
                category{
                    name
                    slug
                }
                publishAt
            }
            postsConnection(where: {
                category: {
                    slug_in: $category
                }
            }) {
                pageInfo{
                    hasPreviousPage
                    hasNextPage
                }
                aggregate {
                    count
                }
            }
    }
`

export const GET_CATEGORY_MENUS = gql`

    query GetCategoryMenus {
        categoryMenus(first: 20){
            mainCategory{
                name
                slug
            }
            subCategories{
                categories{
                    name
                    slug
                    parentCategory{
                        name
                        slug
                    }
                }
            }
        }
    }

`