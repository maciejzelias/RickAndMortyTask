import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/react-testing";
import { EpisodeData, GET_EPISODES_SEASON_4 } from "../../graphql";
import EpisodesList from "./EpisodesList";
import { InMemoryCache } from "@apollo/client";

describe("GraphQL query result with mockedData", () => {
  //arrange
  const mocks: MockedResponse[] = [
    {
      request: {
        query: GET_EPISODES_SEASON_4,
      },
      result: {
        data: {
          episodes: {
            results: [
              {
                episode: "S04E01",
                name: "Edge of Tomorty: Rick, Die, Rickpeat",
                air_date: "November 10, 2019",
              },
            ],
          },
        },
      },
    },
  ];
  //checking if graphql fetch is throwing an error
  it("render without error", async () => {
    //act
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <EpisodesList />
      </MockedProvider>
    );
    //assert
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  //checking if data details of episode 1 from mocked data is rendered
  it("should render Episode 01 details", async () => {
    //act
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <EpisodesList />
      </MockedProvider>
    );
    //assert
    expect(await screen.findByText("S04E01")).toBeInTheDocument();
    expect(
      await screen.findByText("Edge of Tomorty: Rick, Die, Rickpeat")
    ).toBeInTheDocument();
    expect(await screen.findByText("November 10, 2019")).toBeInTheDocument();
  });

  //checking if ui shows accurate comunicates when error occured
  it("should show error UI", async () => {
    //arrange
    const errorMocks: MockedResponse[] = [
      {
        request: {
          query: GET_EPISODES_SEASON_4,
        },
        error: new Error("Couldn't fetch data"),
      },
    ];

    //act
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <EpisodesList />
      </MockedProvider>
    );
    //assert
    expect(
      await screen.findByText("Error: Couldn't fetch data")
    ).toBeInTheDocument();
  });
});
