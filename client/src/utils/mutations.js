import { gql } from '@apollo/client';

// login user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Add user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
      authors
      link
      description
      image
      title
      }
    }
  }
}
`

// Save book
export const SAVE_BOOK = gql`
  mutation saveBook($input: bookDetails) {
    saveBook(input: $input) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        link
        description
        image
        title
      }
    }
  }
`;

// Delete book
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      link
      description
      image
      title
    }
  }
}
` 