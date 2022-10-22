import { render, screen, cleanup } from "@testing-library/react";
import Stylesheet from "./stylesheet";

afterEach(() => {
  cleanup();
});
describe("stylesheet", () => {
  it("header test_1", () => {
    render(<Stylesheet />);
    const headerElement = screen.getByRole("heading", {
      name: /stylesheet/i,
    });
    expect(headerElement).toBeInTheDocument();
  });
  it("header test_2", () => {
    render(<Stylesheet />);
    const headerElement = screen.getByRole("heading", {
      name: /inlinestyle/i,
    });
    expect(headerElement).toBeInTheDocument();
  });
  it("header test_3", () => {
    render(<Stylesheet />);
    const headerElement = screen.getByRole("heading", {
      name: /modulestyle/i,
    });
    expect(headerElement).toBeInTheDocument();
  });
});
