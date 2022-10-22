import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import HigherOrder from "./higherorder";

afterEach(() => {
  cleanup();
});
describe("HigherOrder", () => {
  it("button test of parentref", () => {
    render(<HigherOrder />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
  });
  it("input test of childref", () => {
    render(<HigherOrder />);
    const headerElement = screen.getByTestId("h2_test");
    expect(headerElement).toBeInTheDocument();
  });
  it("user test of user", () => {
    render(<HigherOrder />);
    const divElement = screen.getByTestId("div_user");
    expect(divElement).toBeInTheDocument();
  });
});
