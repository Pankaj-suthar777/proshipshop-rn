/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "@/@types/user.types";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "../../../../../apollo/apolloClient";
import { LOGIN_MUTATION } from "../../../../../graphql/mutations/user.mutations";

type Credentials = {
  email: string;
  password: string;
};

const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const { email, password } = credentials as Credentials;
        console.log("credentials,,,", credentials);

        try {
          const response = await client.mutate({
            mutation: LOGIN_MUTATION,
            variables: { email, password },
          });

          const { token, user_info } = response.data;
          if (!token || !user_info) {
            throw new Error("Invalid login response");
          }

          return { token, ...user_info };
        } catch (error: any) {
          console.error("Error during login:", error.message || error);
          throw new Error("Login failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as IUser;
      return session;
    },
    async signIn({ account, profile }) {
      if (account && profile) {
        return true;
      }
      return false;
    },
    async redirect() {
      return "/dashboard";
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "default_secret",
};

const authHandler = NextAuth(options);

export { authHandler as GET, authHandler as POST };
