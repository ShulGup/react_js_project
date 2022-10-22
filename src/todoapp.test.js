import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ToDoList from "./todoapp";

afterEach(() => {
  cleanup();
});
describe("ToDoList", () => {
  it("Button_1 test", () => {
    render(<ToDoList />);
    const Button_1Element = screen.getByRole("button", {
      name: /Add New to Start/i,
    });
    fireEvent.click(Button_1Element);
  });
  it("Button_2 test", () => {
    render(<ToDoList />);
    const Button_2Element = screen.getByRole("button", {
      name: /Add New to End/i,
    });
    fireEvent.click(Button_2Element);
  });
  it("Button_3 test", () => {
    render(<ToDoList />);
    const Button_3Element = screen.getByRole("button", {
      name: /Sort by Earliest/i,
    });
    fireEvent.click(Button_3Element);
  });
  it("Button_4 test", () => {
    render(<ToDoList />);
    const Button_4Element = screen.getByRole("button", {
      name: /Sort by Latest/i,
    });
    fireEvent.click(Button_4Element);
  });
});
