import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Parentref from "./parentref";
afterEach(() => {
  cleanup();
});
describe("Parentref", () => {
  it("button test of parentref", () => {
    render(<Parentref />);
    const buttonElement = screen.getByRole("button", {
      name: /onfocusthechild/i,
    });
    fireEvent.click(buttonElement);
  });
  it("input test of childref", () => {
    render(<Parentref />);
    const inputElement = screen.getByTestId("input-id");
    expect(inputElement).toBeInTheDocument();
  });
});
