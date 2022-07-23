import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProjectsRow from "../ProjectsRow/ProjectsRow";
import { useSelector } from "react-redux";

function ProjectsTable() {
  const { projects } = useSelector((state) => state);

  return (
    <TableContainer sx={{ margin: "0 48px", width: "auto" }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project info</TableCell>
            <TableCell>Project Manager</TableCell>
            <TableCell>Assigned to</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <ProjectsRow key={project.id} project={project} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectsTable;
