import { useSelector } from "react-redux";
import OptionsMenu from "../OptionsMenu/OptionsMenu";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

function ProjectsList() {
  const { projects } = useSelector((state) => state);

  const stringAvatar = (name) => {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <>
      {projects.map((project) => (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "8px 16px",
            boxShadow: "inset 0px -1px 0px #D9D9D9",
          }}
          key={project.id}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography fontSize={14} color="rgba(0, 0, 0, 0.65)">
                {project.title}
              </Typography>
              <Typography fontSize={10} color="rgba(0, 0, 0, 0.45)">
                {project.description}
              </Typography>
            </div>
            <div>
              <OptionsMenu id={project.id} />
            </div>
          </div>
          <div>
            <Stack direction="row" alignItems="center">
              <Avatar
                sx={{
                  width: "24px",
                  height: "24px",
                  fontSize: "12px",
                  marginRight: "10px",
                }}
                {...stringAvatar(project.assignedTo)}
              />
              <Typography fontSize={12} color="rgba(0, 0, 0, 0.65)">
                {project.assignedTo}
              </Typography>
            </Stack>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectsList;
