import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MockedResponse } from "@apollo/react-testing";
import { Episode as episodeModel } from "../../models/episode";
import Episode from "./Episode";

describe("Episode", () => {
  it("renders the horizontal divider when it is mobile", async () => {
    //arrange
    const episode: episodeModel = {
      episode: "S04E01",
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
      air_date: "November 10, 2019",
    };

    render(<Episode key='0' props={episode} index={1} length={5} />);

    await waitFor(() => {
      global.window.innerWidth = 500;
      global.window.dispatchEvent(new Event("resize"));
    });

    //act

    //assert
    expect(screen.getByTestId("horizontal-divider")).toBeInTheDocument();
  });
});
