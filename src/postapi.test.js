import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Postrequest from "./postapi";

afterEach(() => {
  cleanup();
});
describe("Postrequest", () => {
  it("button test of postrequest", () => {
    render(<Postrequest />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
  });
  it("input name of postrequest", () => {
    render(<Postrequest />);
    const inputElement_name = screen.getByTitle("name");
    fireEvent.change(inputElement_name);
  });
  it("input age of postrequest", () => {
    render(<Postrequest />);
    const inputElement_age = screen.getByTitle("age");
    fireEvent.change(inputElement_age);
  });
  it("async of postrequest", async () => {
    render(<Postrequest />);
    const aync_data = screen.getByTestId("submit_test");
    expect(aync_data).toBeInTheDocument();
  });
});
