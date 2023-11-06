import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { TodoContext } from "../contexts/TodoContext";

import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

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
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Checkbox
        id={item.id.toString()}
        checked={checked}
        onChange={handleCheck}
      />
      <Link className="link" to={`todo/${item.id}`}>
        <label htmlFor={item.id.toString()}>{item.title}</label>
      </Link>
    </Button>
  );
};

export default TodoItem;
