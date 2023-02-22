import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Main component ", () => {
  render(<App />);
  const currentBonusElement = screen.getByText(/Current Bonus: None/i);
  expect(currentBonusElement).toBeInTheDocument();
});
