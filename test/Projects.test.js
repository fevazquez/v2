import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Projects from "../src/components/projects";
import { projects } from "../src/config";

afterEach(cleanup);

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Projects />, div);
});

// Test 2
test("Renders header", () => {
  render(<Projects />);
  expect(screen.getByRole("heading", { level: 2 })).toBeDefined();
  expect(screen.getByText("Projects I've Worked On")).toBeInTheDocument();
});

// Test 2
test("Renders images", () => {
  render(<Projects />);
  projects.forEach((item) => {
    const image = screen.getByAltText(item.title);
    // confirms image exists
    expect(image).toBeInTheDocument();
    // confirms image url
    expect(image).toHaveAttribute("src", item.mobile_img);
  });
});

// Test 3
test("Renders project titles", () => {
  render(<Projects />);
  expect(screen.getAllByRole("heading", { level: 3 })).toBeDefined();
  projects.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });
});

// Test 4
test("Renders project summaries", () => {
  render(<Projects />);
  projects.forEach((item) => {
    expect(screen.getByText(item.summary)).toBeInTheDocument();
  });
});

// Test 5
test("Renders project tech stack", () => {
  render(<Projects />);
  projects.forEach((item) => {
    item.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });
});

// Test 6
test("Renders links", () => {
  render(<Projects />);
  const links = screen.getAllByRole("link");
  expect(links).toBeDefined();
  expect(links.length).toBe(projects.length);
});

// Test 7
test("Renders clickable links", () => {
  render(<Projects />);
  const icons = screen.getAllByRole("link");
  for (let i = 0; i < projects.length; i++) {
    // confirms link url
    expect(icons[i]).toHaveAttribute("href", projects[i].link);
    // click on link
    fireEvent.click(icons[i]);
  }
});
