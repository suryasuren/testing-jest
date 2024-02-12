// Button.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../components/Button"; // Import the component you want to test

test("Button component renders correctly", () => {
  const { getByText } = render(<Button>Click me</Button>);
  const buttonElement = getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});

test("Button click event fires onClick function", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
  const buttonElement = getByText("Click me");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
