import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "../src/components/about/About";

afterEach(cleanup);

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<About />, div);
});

// Test 2
test("Renders header", () => {
  render(<About />);
  expect(screen.getByText("About Me")).toBeInTheDocument();
});

// Test 3
test("Renders image", () => {
  render(<About />);
  expect(screen.getByAltText("yours truly")).toBeDefined();
});

// Test 4
test("Renders description", () => {
  render(<About />);
  const text =
    "Hello! My name is Fernando " +
    "and I am a 2021 UC San Diego computer " +
    "engineering graduate who is highly interested in machine learning, " +
    "web development, and devops. My curiosity in computer science and " +
    "engineering began back in high school when I was sitting in my " +
    "algebra class, where I was introduced to the P vs NP problem.";

  expect(screen.getByText(text)).toBeInTheDocument();
});

// Test 5
test("Renders links", () => {
  render(<About />);
  expect(screen.getAllByRole("link", "research assistant")).toBeDefined();
  expect(
    screen.getAllByRole("link", "a student lead avionics project")
  ).toBeDefined();
  expect(screen.getAllByRole("link", "Amazon AWS")).toBeDefined();
});

// Test 6
test("Renders tech list", () => {
  render(<About />);
  expect(
    screen.getByText(
      "Here are some of the technologies I've been working with recently:"
    )
  ).toBeInTheDocument();
  const skills = [
    "JavaScript",
    "React",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "Jenkins",
  ];
  skills.forEach((item, idx) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});
