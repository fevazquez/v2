import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "../src/App";

// Test 1
test("renders entire app without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
