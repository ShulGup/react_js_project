import { render, screen, cleanup } from "@testing-library/react";
import Getrequest from "./getrequest";

afterEach(() => {
  cleanup();
});
describe("Getrequest", () => {
  it("button test of parentref", async () => {
    render(<Getrequest />);
    const DivElement = await screen.findByTestId("getitem-0");
    expect(DivElement).toBeInTheDocument();
  });
});
