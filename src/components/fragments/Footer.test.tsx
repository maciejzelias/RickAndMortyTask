import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the h1 element with proper text", () => {
    //arrange, act
    render(<Footer />);
    //assert
    expect(screen.findByText("LOREM IPSUM ©2021"));
  });
});
