import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";
import TodoItem from "./components/TodoItem";
import { Outlet } from "react-router-dom";

function App() {
  const { todoList } = useContext(TodoContext);

  return (
    <div className="App">
      <ul>
        {todoList
          .sort((a, b) => a.done - b.done || a.lastUpdate - b.lastUpdate)
          .map((todoItem) => (
            <li key={todoItem.id}>
              <TodoItem item={todoItem} />
            </li>
          ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
