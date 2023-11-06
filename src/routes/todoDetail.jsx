import { useParams } from "react-router-dom";

import useInputs from "../hooks/useInputs";

import TodoCard from "../components/TodoCard";

const TodoDetail = () => {
  const { todoId } = useParams();
  const {
    handleTodoUpdate,
    title,
    description,
    setTitle,
    setDescription,
    todoItem,
  } = useInputs(todoId);

  return (
    todoItem && (
      <TodoCard
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        onSubmit={handleTodoUpdate}
      />
    )
  );
};

export default TodoDetail;
