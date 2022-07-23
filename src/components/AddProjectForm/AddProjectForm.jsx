import * as Yup from "yup";
import { useFormik } from "formik";
import { addProject } from "../../features/projects/projectsSlice";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./AddProjectForm.css";

function AddProjectForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const required = "* Required field";

  const addProjectSchema = Yup.object().shape({
    title: Yup.string().required(required),
    description: Yup.string().required(required),
    projectManager: Yup.string().required(required),
    assignedTo: Yup.string().required(required),
    status: Yup.string().required(required),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      projectManager: "",
      assignedTo: "",
      status: "",
    },
    validationSchema: addProjectSchema,
    onSubmit: (values) => {
      values.id = uuidv4();
      dispatch(addProject(values));
      navigate("/");
    },
  });

  const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
    formik;

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
            style={{
              borderColor:
                errors.title && touched.title ? "#f5222d" : "#d9d9d9",
            }}
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title && (
            <span className="error">{errors.title}</span>
          )}
        </div>
        <div className="form-input">
          <Typography fontSize={14}>Description</Typography>
          <input
            style={{
              borderColor:
                errors.description && touched.description
                  ? "#f5222d"
                  : "#d9d9d9",
            }}
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && touched.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>
        <div className="form-input">
          <Typography fontSize={14}>Project manager</Typography>
          <select
            style={{
              borderColor:
                errors.projectManager && touched.projectManager
                  ? "#f5222d"
                  : "#d9d9d9",
            }}
            name="projectManager"
            value={values.projectManager}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a person</option>
            <option value="Walt Cosani">Walt Cosani</option>
          </select>
          {errors.projectManager && touched.projectManager && (
            <span className="error">{errors.projectManager}</span>
          )}
        </div>
        <div className="form-input">
          <Typography fontSize={14}>Assigned to</Typography>
          <select
            style={{
              borderColor:
                errors.assignedTo && touched.assignedTo ? "#f5222d" : "#d9d9d9",
            }}
            name="assignedTo"
            value={values.assignedTo}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a person</option>
            <option value="Ignacio Truffa">Ignacio Truffa</option>
          </select>
          {errors.assignedTo && touched.assignedTo && (
            <span className="error">{errors.assignedTo}</span>
          )}
        </div>
        <div className="form-input">
          <Typography fontSize={14}>Status</Typography>
          <select
            style={{
              borderColor:
                errors.status && touched.status ? "#f5222d" : "#d9d9d9",
            }}
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a status</option>
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </select>
          {errors.status && touched.status && (
            <span className="error">{errors.status}</span>
          )}
        </div>
        <button id="form-button" type="submit">
          Create project
        </button>
      </form>
    </Container>
  );
}

export default AddProjectForm;
