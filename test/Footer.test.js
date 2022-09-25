import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "../src/components/footnote";

afterEach(cleanup);

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

// Test 2
test("Renders socials", () => {
  render(<Footer />);
  const socials = ["Github", "LinkedIn", "Instagram"];
  socials.forEach((item, idx) => {
    expect(screen.getByRole("link", item)).toBeInTheDocument();
  });
});

// Test 3
test("Renders footnote details", () => {
  render(<Footer />);
  expect(screen.getByText("Built by Fernando Vazquez")).toBeInTheDocument();
  expect(
    screen.getByRole("link", "With inspiration from Brittany Chiang")
  ).toBeInTheDocument();
});

// Test 4
test("Confirms clickable links", () => {
  render(<Footer />);
  const socials = ["Github", "LinkedIn", "Instagram"];
  socials.forEach((item, idx) => {
    fireEvent.click(screen.getByRole("link", item));
  });

  fireEvent.click(
    screen.getByRole("link", "With inspiration from Brittany Chiang")
  );
});
