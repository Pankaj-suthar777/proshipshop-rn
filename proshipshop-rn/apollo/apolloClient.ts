import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// const httpLink = new HttpLink({
//   uri: process.env.REACT_APP_GRAPHQL_URI,
//   credentials: "include",
// });

// const client = new ApolloClient({
//   link: from([httpLink, errorLink]),
//   cache: new InMemoryCache({}),
// });

const client = new ApolloClient({
  uri: "http://192.168.1.40:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
