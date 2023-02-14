import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

describe("App", () => {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  it("renders the Header component", () => {
    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
    expect(getByTestId("header")).toBeInTheDocument();
  });

  it("renders the MainContent component", () => {
    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
    expect(getByTestId("main-content")).toBeInTheDocument();
  });

  it("renders the footer component", () => {
    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
    expect(getByTestId("footer")).toBeInTheDocument();
  });
});
