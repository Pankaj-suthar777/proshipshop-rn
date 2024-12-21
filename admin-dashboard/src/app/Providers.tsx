"use client";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../../apollo/apolloClient";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <SessionProvider> {children}</SessionProvider>
    </ApolloProvider>
  );
};

export default Providers;
