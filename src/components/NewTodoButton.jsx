import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NewTodoButton = () => {
  return (
    <li>
      <Link to="/todo/new">
        <Button
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
            width: "500px",
          }}
        >
          Nouvelle to-do
        </Button>
      </Link>
    </li>
  );
};

export default NewTodoButton;
