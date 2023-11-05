import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { TodoContextProvider } from "./contexts/TodoContext.jsx";
import ErrorPage from "./routes/error.jsx";
import TodoDetail from "./routes/todoDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/todo/:todoId",
        element: <TodoDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </TodoContextProvider>
  </React.StrictMode>
);
