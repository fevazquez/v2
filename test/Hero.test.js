import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../src/components/hero";

afterEach(cleanup);

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Hero />, div);
});

// Test 2
test("Renders Hero Text Greeting", () => {
  jest.useFakeTimers(); // used for the useEffect hook to render the complete hero

  render(<Hero />);
  jest.advanceTimersByTime(1000);
  expect(screen.getByText("Hello, I am")).toBeInTheDocument();
});

// Test 3
test("Renders Hero Text Name", () => {
  jest.useFakeTimers(); // used for the useEffect hook to render the complete hero

  render(<Hero />);
  jest.advanceTimersByTime(1000);
  expect(screen.getByText("Fernando Vazquez.")).toBeInTheDocument();
});

// Text 4
test("Renders Hero Text Title", () => {
  jest.useFakeTimers(); // used for the useEffect hook to render the complete hero

  render(<Hero />);
  jest.advanceTimersByTime(1000);
  expect(
    screen.getByText("Software developer and DevOps enthusiast.")
  ).toBeInTheDocument();
});

// Test 5
test("Renders Hero Current Role", () => {
  jest.useFakeTimers(); // used for the useEffect hook to render the complete hero

  render(<Hero />);
  jest.advanceTimersByTime(1000);
  expect(screen.getByRole("link", "Amazon AWS.")).toBeInTheDocument();
});

// Test 6
test("Renders Image", () => {
  render(<Hero />);
  expect(screen.getByAltText("yours truly")).toBeDefined();
});
