import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Wrapper from "../../tests/Wrapper";
import userEvent from "@testing-library/user-event";

describe("Add a new to-do", () => {
  const user = userEvent.setup();

  it("should display the newTodo component", async () => {
    render(<Wrapper />);
    const notTitleInput = screen.queryByRole("textbox", { name: "Titre" });
    const notDescriptionInput = screen.queryByRole("textbox", {
      name: "Description",
    });

    const newTodoButton = screen.getByRole("button", {
      name: "Nouvelle to-do",
    });

    expect(notTitleInput).not.toBeInTheDocument();
    expect(notDescriptionInput).not.toBeInTheDocument();

    await user.click(newTodoButton);

    const titleInput = screen.getByRole("textbox", { name: "Titre" });
    const descriptionInput = screen.getByRole("textbox", {
      name: "Description",
    });
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });

  it("should not add new task if title is empty", async () => {
    render(<Wrapper />);

    const submitButton = screen.getByRole("button", { name: "Enregistrer" });
    const titleInput = screen.getByRole("textbox", { name: "Titre" });
    const listLength = screen.getAllByRole("listitem").length;

    await user.click(submitButton);

    const newListLength = screen.getAllByRole("listitem").length;
    expect(listLength).toBe(newListLength);

    await user.type(titleInput, "Ma nouvelle to-do !");
    await user.click(submitButton);

    const updatedListLength = screen.getAllByRole("listitem").length;
    expect(updatedListLength).toBeGreaterThan(listLength);
  });

  it("adds new to-do on top of the list", async () => {
    render(<Wrapper />);

    const submitButton = screen.getByRole("button", { name: "Enregistrer" });
    const titleInput = screen.getByRole("textbox", { name: "Titre" });
    const newTodoTitle = "Cuire les carottes";

    await user.type(titleInput, newTodoTitle);
    await user.click(submitButton);

    const todosList = screen.getAllByRole("listitem");
    const firstElement = todosList[0];
    const newTodo = screen.getByRole("button", { name: newTodoTitle });

    expect(firstElement).toContainElement(newTodo);
  });
});
