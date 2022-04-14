import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../src/components/hero";
import { toBeInTheDocument } from "@testing-library/jest-dom";

// Test 1
test("Renders Hero Text", () => {
  const Hello = () => (
    <div>
      Hello <span>world</span>
    </div>
  );
  const { getByText } = render(<Hello />);

  getByText((content, node) => {
    const hasText = (node) => node.textContent === "Hello World";
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  });
});
