import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GraphQLClient } from "graphql-request";
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || "";

const authToken = process.env.GRAPHQL_TOKEN

export function createApolloClient() {
  return new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    headers: {
      authorization: `Bearer ${authToken as string}`
    },
    cache: new InMemoryCache(),
  });
}

export const grafbase = new GraphQLClient(
  process.env.GRAPHQL_ENDPOINT as string, {
    headers: {
      authorization: `Bearer ${authToken as string}`
    }
  }
)
