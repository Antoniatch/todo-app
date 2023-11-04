import PropTypes from "prop-types";

import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ item }) => {
  const { todoList, setTodoList } = useContext(TodoContext);

  const [checked, setChecked] = useState(item.done);

  const handleCheck = (event) => {
    const status = event.target.checked;

    setChecked(status);

    const todos = [...todoList];
    todos.forEach((todo) => {
      if (todo.id === item.id) {
        todo.done = status;
        todo.lastUpdate = new Date();
      }
    });
    setTodoList(todos);
  };

  return (
    <Button
      variant="outlined"
      size="large"
      sx={{
        textTransform: "none",
        width: "500px",
      }}
    >
      <Checkbox
        id={item.id.toString()}
        checked={checked}
        onChange={handleCheck}
      />
      <label htmlFor={item.id.toString()}>{item.title}</label>
    </Button>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
};
