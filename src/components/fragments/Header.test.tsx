import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the p element with proper text", () => {
    //arrange, act
    render(<Header />);
    //assert
    expect(screen.findByText("LOREM IPSUM"));
  });
});
