import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { editProject } from "../../features/projects/projectsSlice";
import "./EditProjectForm.css";

function EditProjectForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { projects } = useSelector((state) => state);

  const project = projects.find((project) => project.id === id);

  const formik = useFormik({
    initialValues: {
      id: project.id,
      title: project.title,
      description: project.description,
      projectManager: project.projectManager,
      assignedTo: project.assignedTo,
      status: project.status,
    },
    onSubmit: (values) => {
      dispatch(editProject(values));
      navigate("/");
    },
  });

  const { handleSubmit, handleChange, handleBlur, values } = formik;

  return (
    <Container
      sx={{
        padding: "32px 40px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
        borderRadius: "4px",
        backgroundColor: "#ffffff",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <Typography fontSize={14}>Project name</Typography>
          <input
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-input">
          <Typography fontSize={14}>Description</Typography>
          <input
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-input">
          <Typography fontSize={14}>Project manager</Typography>
          <select
            name="projectManager"
            value={values.projectManager}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a person</option>
            <option value="Walt Cosani">Walt Cosani</option>
          </select>
        </div>
        <div className="form-input">
          <Typography fontSize={14}>Assigned to</Typography>
          <select
            name="assignedTo"
            value={values.assignedTo}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a person</option>
            <option value="Ignacio Truffa">Ignacio Truffa</option>
          </select>
        </div>
        <div className="form-input">
          <Typography fontSize={14}>Status</Typography>
          <select
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a status</option>
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </select>
        </div>
        <button id="form-button" type="submit">
          Save changes
        </button>
      </form>
    </Container>
  );
}

export default EditProjectForm;
