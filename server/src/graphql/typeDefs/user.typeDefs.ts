const userTypeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    avatar: String
    email: String!
    createdAt: String!
    updatedAt: String!
  }
  
  type PaginatedUsers {
    users: [User]
    # pagination: Pagination
  }

  type Query {
    me: User
    logout: Boolean
    getAllUsers(page: Int, query: String): PaginatedUsers
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    username: String!
    email: String!
  }

  type AdminUser {
    user_info: User
    token: String
  }

  type Mutation {
    registerUser(userInput: UserInput!): User
    login(email: String!, password: String!): User
    updateUserProfile(userInput: UpdateUserInput!): Boolean
    updatePassword(oldPassword: String!, newPassword: String!): Boolean
    uploadUserAvatar(avatar: String!): Boolean
    deleteUser(userId: String!): Boolean
    adminLogin(email: String!, password: String!): AdminUser
  }
`;

export { userTypeDefs };
