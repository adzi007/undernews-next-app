import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import { GraphQLClient } from "graphql-request";

// export const { getClient } = registerApolloClient(() => {
//   return new NextSSRApolloClient({
//     // cache: new NextSSRInMemoryCache(),
//     cache: new InMemoryCache(),
//     link: new HttpLink({

//       // uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
//       uri: process.env.GRAPHQL_ENDPOINT,
//       // you can disable result caching here if you want to
//       // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
//       // fetchOptions: { cache: "no-store" },
//     }),
//   });
// });

// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

// const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || "";
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || "";

// const httpLink = createHttpLink({
//   uri: "YOUR_GRAPHQL_API_URL",
// });

// const authLink = setContext((_, { headers }) => {
//   // Retrieve the token from your authentication mechanism (e.g., localStorage, cookies, etc.)
//   const token = "YOUR_AUTH_TOKEN";
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const authToken = process.env.GRAPHQL_TOKEN

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
      headers: {
        authorization: `Bearer ${authToken}`
      }
    }),
  });
});

export const grafbase = new GraphQLClient(
  process.env.GRAPHQL_ENDPOINT as string, {
    headers: {
      authorization: `Bearer ${authToken as string}`
    }
  }
)

