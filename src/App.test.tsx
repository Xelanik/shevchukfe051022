import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

test("background must be change", () => {
  render(<App />);

  const header = screen.getByText(/Header/i);
  const button = screen.getByText(/Change backgrounds/i);

  fireEvent.click(button);

  expect(header.getAttribute("class")).toMatch(
    /(cats|chubaka|dogs|dyno|planets)$/
  );
});
