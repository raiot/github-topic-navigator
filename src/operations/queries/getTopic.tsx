import { gql } from '@apollo/client';

const GET_TOPIC = gql`
query Topic($name: String!) { 
  topic(name: $name) {
    relatedTopics {
      id
      name
      stargazerCount
    }
  }
}
`;


export {
  GET_TOPIC
};
