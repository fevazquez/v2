import { render, screen } from "@testing-library/react";
import Hero from "../src/components/hero";

// Test 1
test("Renders Hero Text", () => {
  render(<Hero />);
  const nameElement = screen.getByText(/Fernando Vazquez/i);
  expect(nameElement).toBeInTheDocument();
});
