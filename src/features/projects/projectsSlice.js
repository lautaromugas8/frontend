import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Landing page",
    description: "Creation date:  09/09/2020 10:30 am",
    projectManager: "Walt Cosani",
    assignedTo: "Ignacio Truffa",
    status: "Enabled",
  },
  {
    id: "2",
    title: "E-Commerce Shop",
    description: "Creation date:  09/09/2020 10:30 am",
    projectManager: "Walt Cosani",
    assignedTo: "Ignacio Truffa",
    status: "Enabled",
  },
  {
    id: "3",
    title: "CRM Linkroom",
    description: "Creation date:  09/09/2020 10:30 am",
    projectManager: "Walt Cosani",
    assignedTo: "Ignacio Truffa",
    status: "Enabled",
  },
];

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
    editProject: (state, action) => {
      let index = state.findIndex(
        (project) => project.id === action.payload.id
      );
      state[index] = action.payload;
    },
    deleteProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },
  },
});

export const { addProject, editProject, deleteProject } = projectsSlice.actions;

export default projectsSlice.reducer;
