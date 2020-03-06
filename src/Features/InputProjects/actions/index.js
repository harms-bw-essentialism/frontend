import {
  SUBMIT_PROJECT,
  START_EDIT_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from "./types";
import axios from "axios";

export const fetchProjects = userId => dispatch => {
  dispatch({ type: FETCH_PROJECTS });
  axios
    .get(
      `https://essentialism2020.herokuapp.com/api/essentialism/projects/user/${userId}`
    )
    .then(res => {
      dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err.message });
    });
};

export const submitProject = project => dispatch => {
  dispatch({ type: SUBMIT_PROJECT, payload: project });
};

export const startEditingProject = projectEditingId => dispatch => {
  dispatch({ type: START_EDIT_PROJECT, payload: projectEditingId });
};
