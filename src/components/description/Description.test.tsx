import React from "react";
import { render, screen } from "@testing-library/react";
import Description from "./Description";

describe("Description", () => {
  it("renders the h1 element with proper text", () => {
    //arrange, act
    render(<Description />);
    //assert
    expect(
      screen.findByText(
        "Episodes of the 4th season of the series Rick and Morty"
      )
    );
  });
});
