import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MockedProvider, MockedResponse } from "@apollo/react-testing";
import { GET_EPISODES_SEASON_4 } from "./graphql";

describe("App", () => {
  //arrange
  //some mockedData needed to proper behaviour of MockedProvider
  const mocks: MockedResponse[] = [
    {
      request: {
        query: GET_EPISODES_SEASON_4,
      },
      result: {
        data: {
          episodes: {
            results: [],
          },
        },
      },
    },
  ];

  it("renders the Header component", () => {
    //act
    const { getByRole } = render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    //assert
    expect(getByRole("banner")).toBeInTheDocument();
  });

  it("renders the MainContent component", () => {
    //act
    const { getByTestId } = render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    //assert
    expect(getByTestId("main-content")).toBeInTheDocument();
  });

  it("renders the footer component", () => {
    //act
    const { getByRole } = render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    //assert
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });
});
