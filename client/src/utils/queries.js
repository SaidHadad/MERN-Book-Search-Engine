import { gql } from '@apollo/client';

// query me
export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      image
      title
    }
  }
}
`;