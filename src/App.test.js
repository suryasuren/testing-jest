// Button.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App"; // Import the component you want to test

test("App component renders a button correctly", () => {
  const { getByText } = render(<App />);

  const buttonElement = getByText(/Click me/i); // Adjust the text accordingly
  expect(buttonElement).toBeInTheDocument();
});
