import React from "react";
import { render, screen } from "@testing-library/react";
import { Episode as episodeModel } from "../../models/episode";
import Episode from "./Episode";

describe("Episode", () => {
  it("renders li element with proper values", async () => {
    //arrange
    const episode: episodeModel = {
      episode: "S04E01",
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
      air_date: "November 10, 2019",
    };

    //act
    const { getByTestId } = render(
      <Episode key="0" props={episode} index={1} length={5} />
    );

    //assert
    expect(getByTestId("episode-element")).toBeInTheDocument();
    expect(
      screen.getByText("Edge of Tomorty: Rick, Die, Rickpeat")
    ).toBeInTheDocument();
    expect(screen.getByText("November 10, 2019")).toBeInTheDocument();
  });
});
