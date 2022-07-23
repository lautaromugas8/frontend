import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { deleteProject } from "../../features/projects/projectsSlice";
import { useNavigate } from "react-router-dom";

function OptionsMenu({ id }) {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    dispatch(deleteProject(id));
  };

  const handleEdit = () => {
    setAnchorEl(null);
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <IconButton
        id="more-button"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        MenuListProps={{ "aria-labelledby": "more-button" }}
      >
        <MenuItem
          onClick={handleEdit}
          sx={{ fontSize: "12px", borderBottom: "1px solid #dddddd" }}
        >
          <EditIcon fontSize="12px" />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ fontSize: "12px" }}>
          {" "}
          <DeleteOutlineSharpIcon fontSize="12px" /> Delete
        </MenuItem>
      </Menu>
    </>
  );
}

export default OptionsMenu;
