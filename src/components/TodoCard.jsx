import { Link } from "react-router-dom";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button, Stack } from "@mui/material";

const TodoCard = ({
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
}) => {
  return (
    <div className="todo-card">
      <Link to="/">
        <CloseOutlinedIcon />
      </Link>

      <form onSubmit={onSubmit}>
        <Stack spacing={2} padding="15px 0">
          <input
            className="input title"
            type="text"
            required
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="input description"
            rows={10}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
            }}
          >
            Enregistrer
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default TodoCard;
