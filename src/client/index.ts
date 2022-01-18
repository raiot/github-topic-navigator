import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {cache} from '../cache';

const server: string = import.meta.env.VITE_SERVER;
const token: string = import.meta.env.VITE_ACCESS_TOKEN;

const httpLink = createHttpLink({
  uri: server
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: true
});

export default client;


