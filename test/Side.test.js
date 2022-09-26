import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Side from "../src/components/side";

afterEach(cleanup);

// Test 1
test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Side isHome={true} orientation="left" />, div);
  ReactDOM.render(<Side isHome={true} orientation="right" />, div);
});
