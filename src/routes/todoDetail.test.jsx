import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Wrapper from "../../tests/Wrapper";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { initialList } from "../contexts/TodoContext";

describe("Display detailed to-do", () => {
  const user = userEvent.setup();

  it("should display detailed todo route component", async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );

    const task = initialList[0];
    const link = screen.getByRole("link", { name: task.title });

    const notTitleInput = screen.queryByRole("textbox", { name: "Titre" });
    const notDescriptionInput = screen.queryByRole("textbox", {
      name: "Description",
    });
    expect(notTitleInput).toBeNull();
    expect(notDescriptionInput).toBeNull();

    await user.click(link);

    const titleInput = screen.getByRole("textbox", { name: "Titre" });
    const descriptionInput = screen.getByRole("textbox", {
      name: "Description",
    });
    expect(titleInput).toHaveValue(task.title);
    expect(descriptionInput).toHaveValue(task.description);
  });
});
