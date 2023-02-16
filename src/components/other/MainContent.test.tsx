import React from "react";
import { render } from "@testing-library/react";
import MainContent from "./MainContent";
import { MockedProvider, MockedResponse } from "@apollo/react-testing";
import { GET_EPISODES_SEASON_4 } from "../../graphql";

describe("MainContent", () => {
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
  it("renders the main element", () => {
    //act
    const { getByRole } = render(
      <MockedProvider mocks={mocks}>
        <MainContent />
      </MockedProvider>
    );
    //assert
    expect(getByRole("main")).toBeInTheDocument();
  });

  it("renders the section element", () => {
    //act
    const { getByTestId } = render(
      <MockedProvider mocks={mocks}>
        <MainContent />
      </MockedProvider>
    );
    //assert
    expect(getByTestId("main-container")).toBeInTheDocument();
  });
});
