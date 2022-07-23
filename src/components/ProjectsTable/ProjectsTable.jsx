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
          <TableRow sx={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
            <TableCell sx={{ fontWeight: 600 }}>Project info</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Project Manager</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Assigned to</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
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
