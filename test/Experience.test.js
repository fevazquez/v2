import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Experience from "../src/components/experience";
import MobileMenu from "../src/components/experience/MobileMenu";
import { jobs } from "../src/config";

const nextTabs = ["Amazon", "Nisum", "SOPAC", "RPL"];

afterEach(cleanup);

// Desktop tests 1-6
// Mobile tests 7-11

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Experience />, div);
});

// Test 2
test("Renders header", () => {
  render(<Experience />);
  expect(screen.getByRole("heading", { level: 2 })).toBeDefined();
  expect(screen.getByText("My Experience")).toBeInTheDocument();
});

// Test 3
test("Renders tab names", () => {
  render(<Experience />);
  const tabs = screen.getAllByRole("tab");
  expect(tabs).toHaveLength(4);
  jobs.forEach((item) => {
    expect(
      screen.getByRole("tab", { name: item.abbreviation })
    ).toBeInTheDocument();
  });
});

// Test 4
test("Renders role titles", () => {
  render(<Experience />);
  jobs.forEach((item, idx) => {
    // Find and click on the tab
    const nextTab = screen.getByRole("tab", {
      name: nextTabs[idx],
    });
    fireEvent.click(nextTab);
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: `${item.title} | ${item.company}`,
      })
    ).toBeInTheDocument();
  });
});

// Test 5
test("Renders role dates", () => {
  render(<Experience />);
  jobs.forEach((item, idx) => {
    // Find and click on the tab
    const nextTab = screen.getByRole("tab", {
      name: nextTabs[idx],
    });
    fireEvent.click(nextTab);
    expect(screen.getByText(item.date)).toBeInTheDocument();
  });
});

// Test 6
test("Renders role description", () => {
  render(<Experience />);
  jobs.forEach((item, idx) => {
    // Find and click on the tab
    const nextTab = screen.getByRole("tab", {
      name: nextTabs[idx],
    });
    fireEvent.click(nextTab);
    expect(screen.getByText(item.description)).toBeInTheDocument();
  });
});

// Test 7
test("Renders mobile without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MobileMenu jobs={jobs} />, div);
});

// Test 8
test("Renders mobile tabs by name", () => {
  render(<MobileMenu jobs={jobs} />);
  const tabs = screen.getAllByRole("button");
  expect(tabs).toHaveLength(4);
  jobs.forEach((item) => {
    expect(
      screen.getByRole("button", { name: item.abbreviation })
    ).toBeInTheDocument();
  });
});

// Test 9
test("Renders mobile role titles", () => {
  render(<MobileMenu jobs={jobs} />);
  jobs.forEach((item, idx) => {
    // Find and click on the tab
    const nextTab = screen.getByRole("button", {
      name: nextTabs[idx],
    });
    fireEvent.click(nextTab);
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: `${item.title} | ${item.company}`,
      })
    ).toBeInTheDocument();
  });
});

// Test 10
test("Renders mobile role dates", () => {
  render(<MobileMenu jobs={jobs} />);
  jobs.forEach((item, idx) => {
    // Find and click on the tab
    const nextTab = screen.getByRole("button", {
      name: nextTabs[idx],
    });
    fireEvent.click(nextTab);
    expect(screen.getByText(item.date)).toBeInTheDocument();
  });
});

// Test 11
test("Renders mobile role description", () => {
  render(<MobileMenu jobs={jobs} />);
  jobs.forEach((item, idx) => {
    // Find and click on the tab
    const nextTab = screen.getByRole("button", {
      name: nextTabs[idx],
    });
    fireEvent.click(nextTab);
    expect(screen.getByText(item.description)).toBeInTheDocument();
  });
});
