import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";
import { Outlet } from "react-router-dom";

import TodoItem from "./components/TodoItem";
import NewTodoButton from "./components/NewTodoButton";

function App() {
  const { todoList } = useContext(TodoContext);

  return (
    <div className="App">
      <ul>
        {todoList
          .sort((a, b) => {
            if (a.done || b.done) {
              return a.done - b.done || a.lastUpdate - b.lastUpdate;
            }

            if (!a.done || b.done) {
              return a.done - b.done || b.lastUpdate - a.lastUpdate;
            }
          })
          .map((todoItem) => (
            <li key={todoItem.id}>
              <TodoItem item={todoItem} />
            </li>
          ))}
        <NewTodoButton />
      </ul>

      <Outlet />
    </div>
  );
}

export default App;
