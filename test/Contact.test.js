import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../src/components/contact";

afterEach(cleanup);

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Contact />, div);
});

// Test 2
test("Renders header", () => {
  render(<Contact />);
  expect(screen.getByText("Contact")).toBeInTheDocument();
});

// Test 3
test("Renders sub-header", () => {
  render(<Contact />);
  expect(screen.getByText("Reach Out!")).toBeInTheDocument();
});

// Test 4
test("Renders outro", () => {
  render(<Contact />);
  const text =
    "Whether you have a question or just stopping " +
    "by to say hi, Ill do my best to get back to you!";
  expect(screen.getByText(text)).toBeInTheDocument();
});

// Test 5
test("Renders link", () => {
  render(<Contact />);
  expect(screen.getByRole("link", "Say Hi")).toBeInTheDocument();
});

test("Confirms clickable link", () => {
  render(<Contact />);

  // confirms link url
  expect(screen.getByRole("link", "Say Hi")).toHaveAttribute(
    "href",
    "mailto:f4vazquez@gmail.com"
  );

  // click on link
  fireEvent.click(screen.getByRole("link", "Say Hi"));
});
