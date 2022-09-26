import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import NavBar from "../src/components/navbar";
import Burger from "../src/components/navbar/burger";
import Menu from "../src/components/navbar/menu";

let pages = ["About", "Experience", "Projects", "Contact"];

afterEach(cleanup);

// Desktop tests 1-3
// Mobile tests 4-y

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
});

// Test 2
test("Renders logo", () => {
  render(<NavBar />);
  const logo = screen.getAllByAltText("Fernando Vazquez");
  expect(logo).toBeDefined();
  expect(
    screen.getByRole("link", { name: "Fernando Vazquez" })
  ).toHaveAttribute("href", "/");
});

// Test 3
test("Renders section names", () => {
  render(<NavBar />);
  pages.forEach((item) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
  expect(screen.getByText("Resume")).toBeInTheDocument();
});

// Test 4
test("Renders section clickable sections", () => {
  render(<NavBar />);
  pages.forEach((item) => {
    const section = screen.getByRole("link", { name: item });
    expect(section).toHaveAttribute("href", `/#${item.toLowerCase()}`);
    fireEvent.click(section);
  });
  expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
    "href",
    "test-file-stub"
  );
  fireEvent.click(screen.getByRole("link", { name: "Resume" }));
});

// Test 5
test("Renders burger without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Burger open={false} />, div);
  ReactDOM.render(<Burger open={true} />, div);
});

// Test 6
test("Renders menu without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Menu open={false} />, div);
  ReactDOM.render(<Menu open={true} />, div);
});

// Test 7
test("Renders mobile section names opened", () => {
  render(<Menu open={true} />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  pages.forEach((item) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
  expect(screen.getByText("Resume")).toBeInTheDocument();
});

// Test 8
test("Renders mobile section names closed", () => {
  render(<Menu open={false} />);
  expect(screen.getByRole("navigation", { hidden: true })).toBeInTheDocument();
});

// Test 9
test("Renders mobile section clickable sections", () => {
  render(<Menu open={true} />);
  pages.forEach((item) => {
    const section = screen.getByRole("link", { name: item });
    expect(section).toHaveAttribute("href", `#${item.toLowerCase()}`);
  });
  expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
    "href",
    "test-file-stub"
  );
});
