import { Link } from "react-router-dom";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";

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
          <TextField
            variant="outlined"
            label="Titre"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            multiline
            rows={10}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

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
