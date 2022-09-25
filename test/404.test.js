import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import NotFound from "../src/components/404/NotFound";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>,
    div
  );
});

// Test 2
test("Renders header", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  expect(screen.getByText("404")).toBeInTheDocument();
});

// Test 3
test("Renders body", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  expect(screen.getByText("Not Found :(")).toBeInTheDocument();
});

// Test 4
test("Renders button", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const button = screen.getByRole("link");
  expect(button).toBeDefined();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(button).toHaveClass("bigButton");
});

// Test 5
test("Renders clickable button", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const button = screen.getByRole("link");
  expect(button).toHaveAttribute("href", "/");
  fireEvent.click(button);
});
