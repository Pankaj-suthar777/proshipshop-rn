import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation AdminLogin($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      user_info {
        id
        email
      }
      token
    }
  }
`;
