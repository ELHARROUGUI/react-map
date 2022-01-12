import { render, screen } from "@testing-library/react";
import { APP_ELEMENTS } from "../shared/constants";
import App from ".";

describe("rendering <App />", () => {
  APP_ELEMENTS.forEach((element) => {
    test(`renders the app element: ${element}`, () => {
      render(<App />);
      const screenElement = screen.getByTestId(element);
      expect(screenElement).toBeInTheDocument();
    });
  });
});
