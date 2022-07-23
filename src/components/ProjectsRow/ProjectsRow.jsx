import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import OptionsMenu from "../OptionsMenu/OptionsMenu";
import Typography from "@mui/material/Typography";

function ProjectsRow({ project }) {
  const { title, description, projectManager, assignedTo, status, id } =
    project;

  const stringAvatar = (name) => {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <TableRow>
      <TableCell>
        <Typography fontSize={14} color="rgba(0, 0, 0, 0.65)">
          {title}
        </Typography>
        <Typography fontSize={14} color="rgba(0, 0, 0, 0.45)">
          {description}
        </Typography>
      </TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Avatar
            sx={{
              width: 24,
              height: 24,
              fontSize: "9px",
              marginRight: "8.3px",
            }}
            {...stringAvatar(projectManager)}
          />
          <Typography fontSize={14} color="rgba(0, 0, 0, 0.65)">
            {projectManager}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Avatar
            sx={{
              width: 24,
              height: 24,
              fontSize: "9px",
              marginRight: "8.3px",
            }}
            {...stringAvatar(assignedTo)}
          />
          <Typography fontSize={14} color="rgba(0, 0, 0, 0.65)">
            {assignedTo}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>
        <OptionsMenu id={id} />
      </TableCell>
    </TableRow>
  );
}

export default ProjectsRow;
