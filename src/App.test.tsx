import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Main component default state", () => {
  render(<App />);

  const currentBonusElement = screen.getByText(/Current Bonus: None/i);

  expect(currentBonusElement).toBeInTheDocument();

  // TODO: Check initial total stat display number is 0

  // TODO: Check resource initial stat display is 0
});
