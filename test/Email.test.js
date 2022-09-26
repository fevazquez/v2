import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Email from "../src/components/email";

afterEach(cleanup);

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Email />, div);
});

// Test 2
test("Renders email", () => {
  jest.useFakeTimers(); // used for the useEffect hook to render the complete hero

  render(<Email />);
  jest.advanceTimersByTime(1000);
  expect(screen.getByText("f4vazquez@gmail.com")).toBeInTheDocument();
});

// Test 3
test("Renders clickable email", () => {
  jest.useFakeTimers(); // used for the useEffect hook to render the complete hero

  render(<Email />);
  jest.advanceTimersByTime(1000);
  expect(
    screen.getByRole("link", { name: "f4vazquez@gmail.com" })
  ).toHaveAttribute("href", "mailto:f4vazquez@gmail.com");
});
