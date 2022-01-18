import { gql } from '@apollo/client';

const GET_SEARCH = gql`
query GetSearch {
    search @client {
        term: string
    }
}
`;

export {
    GET_SEARCH
};

