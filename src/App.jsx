import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";

import Button from "@mui/material/Button";

function App() {
  const { todoList } = useContext(TodoContext);

  return (
    <ul className="App">
      {todoList.map((todoItem) => (
        <li key={todoItem.id}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              textTransform: "none",
              width: "500px",
            }}
          >
            {todoItem.title}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default App;
