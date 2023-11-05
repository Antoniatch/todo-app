import { useContext, useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import { TodoContext } from "../contexts/TodoContext";

const NewTodo = () => {
  const { todoList, setTodoList } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  return (
    <TodoCard
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      onSubmit={handleNewTodo}
    />
  );
};

export default NewTodo;
