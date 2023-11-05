import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodoContextProvider } from "../src/contexts/TodoContext";
import App from "../src/App";
import TodoDetail from "../src/routes/todoDetail";
import NewTodo from "../src/routes/newTodo";

const Wrapper = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/todo/:todoId",
          element: <TodoDetail />,
        },
        {
          path: "/todo/new",
          element: <NewTodo />,
        },
      ],
    },
  ]);

  return (
    <TodoContextProvider>
      <RouterProvider router={router}>{children}</RouterProvider>
    </TodoContextProvider>
  );
};

export default Wrapper;
