import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const useInputs = (todoId) => {
  const { todoList, setTodoList } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoItem, setTodoItem] = useState(null);

  useEffect(() => {
    if (todoId) {
      todoList.forEach((todo) => {
        if (todo.id === +todoId) {
          setTodoItem(todo);
          setTitle(todo.title);
          setDescription(todo.description);
        }
      });
    }
  }, [todoId]);

  const handleNewTodo = (e) => {
    e.preventDefault();

    const id = todoList.length;
    const newTodo = {
      id,
      title,
      description,
      done: false,
      lastUpdate: new Date(),
    };

    const todos = [...todoList];
    todos.push(newTodo);
    setTodoList(todos);
    setTitle("");
    setDescription("");
  };

  const handleTodoUpdate = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      description,
      lastUpdate: new Date(),
    };

    const todos = [...todoList];
    todos.forEach((todo) => {
      if (todo.id === todoItem.id) {
        todo.title = newTodo.title;
        todo.description = newTodo.description;
      }
    });

    setTodoList(todos);
  };

  return {
    handleNewTodo,
    handleTodoUpdate,
    title,
    setTitle,
    description,
    setDescription,
    todoItem,
    setTodoItem,
  };
};

export default useInputs;
