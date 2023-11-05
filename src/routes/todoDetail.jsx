import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const TodoDetail = () => {
  const { todoId } = useParams();
  const { todoList } = useContext(TodoContext);

  const [todoItem, setTodoItem] = useState(null);

  useEffect(() => {
    const newId = todoId;

    todoList.forEach((todo) => {
      if (todo.id === +newId) {
        setTodoItem(todo);
      }
    });
  }, [todoId]);

  return (
    todoItem && (
      <div className="todo-card">
        <Link to="/">
          <CloseOutlinedIcon />
        </Link>
        <h1>{todoItem.title}</h1>
        <p>{todoItem.description}</p>
      </div>
    )
  );
};

export default TodoDetail;
