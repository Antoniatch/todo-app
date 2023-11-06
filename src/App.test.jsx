import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { initialList } from "./contexts/TodoContext";

import App from "../src/App";
import Wrapper from "../tests/Wrapper";

describe("App", () => {
  const user = userEvent.setup();

  it("renders initial to-dos", () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );

    initialList.forEach((task) => {
      expect(screen.getByText(task.title)).toBeInTheDocument();

      if (task.done)
        expect(
          screen.getByRole("checkbox", { name: task.title })
        ).toBeChecked();
      if (!task.done)
        expect(
          screen.getByRole("checkbox", { name: task.title })
        ).not.toBeChecked();
    });
  });

  it("checks checkbox and places item at last position", async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );

    const uncheckedTask = initialList.filter((task) => {
      return !task.done;
    })[0];
    const taskCheckbox = screen.getByRole("checkbox", {
      name: uncheckedTask.title,
    });

    expect(taskCheckbox).not.toBeChecked();

    await user.click(taskCheckbox);

    expect(taskCheckbox).toBeChecked();

    const todosList = screen.getAllByRole("listitem");
    const lastItem = todosList[todosList.length - 2];
    expect(lastItem).toContainElement(taskCheckbox);
  });
});
