import { QUERY_POSTS_HOME, GET_POST_SINGLE, GET_POST_INDEXES, GET_CATEGORY_MENUS, GET_POST_INDEXES_CATEGORY } from "@/graphql/post";
import { useQuery, gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { getClient as graphcms } from "@/lib/client";
import { MUTATION_CREATE_USER, GET_USER_BY_EMAIL, MUTATION_PUBLISH_USER } from "@/graphql/user";

import { GraphQLClient } from "graphql-request";

import { grafbase } from "@/lib/client";

interface HomePost {
    data: {
        postHeadlines:{
            title: string
            datePublish: string,
            posts:{
                title: string,
                slug: string,
                thumbnail: {
                    url: string
                },
                category: {
                    name: string
                    slug: string
                }
            }[]
        }[],
        posts: {
            id: string,
            title: string,
            slug: string,
            thumbnail: {
                url: string
            },
            publishAt: string
            category: {
                name: string
                slug: string
            }
        }[]
    }
}

export const getPostHome = async () => {

     const post:HomePost  = await graphcms().query({
        query: QUERY_POSTS_HOME,
     })

     return post

}

function convertToLimitAndStart(perPage: number, page: number): { limit: number; start: number } {
    const limit: number = perPage;
    const start: number = (page - 1) * perPage;
    return { limit, start };
}



interface Thumbnail {
    url: string;
}

interface Category {
    name: string;
    slug: string;
    parentCategory: {
        name: string;
        slug: string
    }
}

interface PageInfo {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

interface Aggregate {
    count: string;
}

interface Post {
    title: string;
    slug: string;
    thumbnail: Thumbnail;
    publishAt: string;
    category: Category;
}

interface PostsConnection {
    pageInfo: PageInfo;
    aggregate: Aggregate;
}

interface PostsIndexes {
    data:{
        posts: Post[];
        postsConnection: PostsConnection;
    }
    
}

const perPage: number = 10; 

export const getPostIndexes = async (page: number, category: Array<string>) => {

    const { limit, start } = convertToLimitAndStart(perPage, page);   

    if(category.length == 0){

        const postx:PostsIndexes = await graphcms().query({
            query: GET_POST_INDEXES,
            variables:{
             limit,
             start
            }
         })
     
         return postx.data

    }else{

        const postx:PostsIndexes = await graphcms().query({
            query: GET_POST_INDEXES_CATEGORY,
            variables:{
             limit,
             start,
             category
            }
         })
     
         return postx.data

    }
    
}

// -------------------------------------------------------
// Category Menus
// -------------------------------------------------------

// interface CategoriesSubMenu {
//     categories: Category[]
// }

interface CategoryMenusData {
    mainCategory: {
        name: string;
        slug: string;
    }
    subCategories: { 
        categories: Category[];
    }
}

interface CategoryMenusResponse {
    data: {
        categoryMenus: CategoryMenusData[]
    }
}

export const getCategoryMenus = async () => {

    const categoryMenus: CategoryMenusResponse = await graphcms().query({
       query: GET_CATEGORY_MENUS
    })

    return categoryMenus.data.categoryMenus
}

enum AuthProvider {
    google = "google",
    email = "email",
}

interface UserAccountCreate {

    fullname: string;
    email: string;
    avatar:string;
    extDbId: string;
    authProvider: AuthProvider;
    isActive: boolean;
}

interface UserAccountCreateResponse {
    createUserAccount: {
        id: string;
        fullname: string;
        email: string;
        avatar:string;
        extDbId: string;
        authProvider: AuthProvider;
        isActive: boolean;
    }
}
export const insertUserAccount = async (user: UserAccountCreate) => {

    const createUserResponse = await graphcms().mutate({
        mutation: MUTATION_CREATE_USER,
        variables:{
            fullname: "test",
            email: "tsytuastuta",
            avatar: "kjsdhfdkjshdfk",
            extDbId: "",
            isActive: true
        }
    })

    return createUserResponse
    

}

export const getUserByEmail = async (email: string) => {

    let user  = await graphcms().query({
       query: GET_USER_BY_EMAIL,
       variables: {
        email
       }
       
    })

    return user

}

export async function createUserMutation(user: UserAccountCreate) {

    const { fullname, email, avatar, authProvider, extDbId, isActive } = user
  
    const variables = { fullname, email, avatar, authProvider, extDbId, isActive };
    
    try {

      const data: UserAccountCreateResponse = await grafbase.request(MUTATION_CREATE_USER, variables)
      await grafbase.request(MUTATION_PUBLISH_USER, {
        id: data.createUserAccount.id
      })

      return data;

    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }

}
