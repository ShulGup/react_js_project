import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Lifecycle from "./Lifecycle";
import Memo from "./Memo";
import LifecycleA from "./LifecycleA";

afterEach(() => {
  cleanup();
});
describe("Lifecycle", () => {
  it("button test of lifecycle", () => {
    render(<Lifecycle />);
    const buttonElement = screen.getByRole("button", {
      name: /updates/i,
    });
    fireEvent.click(buttonElement);
  });
});
describe("Memo", () => {
  it("memo test", async () => {
    render(<Memo name="shulbhi" />);
    const DivElement = screen.getByTestId("memo_test");
    expect(DivElement).toBeInTheDocument();
  });
});
describe("LifeCycleA", () => {
  it("LifecycleA", async () => {
    render(<LifecycleA />);
    const TextElement = screen.getByText(/lifecycle A/i);
    expect(TextElement).toBeInTheDocument();
  });
});
