import TodoCard from "../components/TodoCard";
import useInputs from "../hooks/useInputs";

const NewTodo = () => {
  const { handleNewTodo, title, setTitle, description, setDescription } =
    useInputs();

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
