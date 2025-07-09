import { gql } from '@apollo/client';

export const MUTATION_CREATE_USER = gql`

    mutation CreateUserAccount($fullname: String!, $email: String!, $avatar: String!, $extDbId: String, $authProvider: String!, $isActive: Boolean!){

        createUserAccount(data:{
            fullname: $fullname,
            email: $email,
            avatar: $avatar,
            extDbId: $extDbId,
            authProvider: $authProvider,
            isActive: $isActive
        }){
            id
            fullname
            email
            avatar
            authProvider
        }

    }

`

export const MUTATION_PUBLISH_USER = gql`

    mutation PublishUser($id: ID!){

        publishUserAccount(where:{
            id:$id
        }){
            id
            fullname
        }

    }

`

export const GET_USER_BY_EMAIL = gql`

    query GetCategoryMenus($email: String!) {
        userAccounts(where: { email: $email }){
           id
           fullname
        }
    }

`