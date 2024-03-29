import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Socials from "../src/components/socials";
import { socialMedia } from "../src/config";

afterEach(cleanup);

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Socials />, div);
});

// Test 2
test("Renders socials", () => {
  jest.useFakeTimers(); // used for the useEffect hook to render the complete hero

  render(<Socials />);
  jest.advanceTimersByTime(1000);
  socialMedia.forEach((item) => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
  });
});

// Test 3
test("Renders socials clickable links", () => {
  jest.useFakeTimers(); // used for the useEffect hook to render the complete hero

  render(<Socials />);
  jest.advanceTimersByTime(1000);
  socialMedia.forEach((item) => {
    expect(screen.getByRole("link", { name: item.name })).toHaveAttribute(
      "href",
      item.url
    );
  });
});
