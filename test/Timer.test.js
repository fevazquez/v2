import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Timer from "../src/components/timer";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

// Required to mock timers and system time
beforeAll(() => {
    jest.useFakeTimers();
});

afterAll(() => {
    jest.useRealTimers();
});

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Timer />
    </BrowserRouter>,
    div
  );
});

// Test 2
test("Renders initial time correctly", () => {
  // Set fake system time
  const mockedNow = new Date("2024-10-24T06:25:00Z");
  jest.setSystemTime(mockedNow);

  render(<Timer />);
  expect(screen.getByText(/3 Years/i)).toBeInTheDocument();
  expect(screen.getByText(/0 Months/i)).toBeInTheDocument();
  expect(screen.getByText(/0 Days/i)).toBeInTheDocument();
  expect(screen.getByText(/0 Hours/i)).toBeInTheDocument();
  expect(screen.getByText(/1 Minutes/i)).toBeInTheDocument();
  expect(screen.getByText(/0 Seconds/i)).toBeInTheDocument();
});

// Test 3
test("Renders after one second", ()=> {
  const mockedNow = new Date("2024-10-24T06:25:00Z");
  jest.setSystemTime(mockedNow);
  
  render(<Timer />);
  jest.advanceTimersByTime(1000);
  
  // Update system time by 1 second
  jest.setSystemTime(new Date(mockedNow.getTime() + 1000));
  
  // Force component to update (some environments may need this)
  jest.runOnlyPendingTimers();
  
  expect(screen.getByText(/1 Seconds/i)).toBeInTheDocument();
});