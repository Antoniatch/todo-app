import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";
import TodoItem from "./components/TodoItem";

function App() {
  const { todoList } = useContext(TodoContext);

  return (
    <ul className="App">
      {todoList
        .sort((a, b) => a.done - b.done || a.lastUpdate - b.lastUpdate)
        .map((todoItem) => (
          <li key={todoItem.id}>
            <TodoItem item={todoItem} />
          </li>
        ))}
    </ul>
  );
}

export default App;
