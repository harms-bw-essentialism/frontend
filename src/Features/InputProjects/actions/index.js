import {
  SUBMIT_PROJECT,
  SUBMIT_PROJECT_SUCCESS,
  SUBMIT_PROJECT_FAILURE,
  START_EDIT_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  EDIT_PROJECT
} from "./types";
import axios from "axios";
import { axiosWithAuth } from "../../../Common/Utils/axiosWithAuth";

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
  dispatch({ type: SUBMIT_PROJECT });
  axiosWithAuth()
    .post(
      `https://essentialism2020.herokuapp.com/api/essentialism/projects/`,
      project
    )
    .then(res => {
      dispatch({ type: SUBMIT_PROJECT_SUCCESS });
      dispatch(fetchProjects(project.userId));
    })
    .catch(err => dispatch({ type: SUBMIT_PROJECT_FAILURE, payload: err }));
};

// export const startEditingProject = projectEditingId => dispatch => {
//   dispatch({ type: START_EDIT_PROJECT, payload: projectEditingId });
// };

// export const editProject = (projectid, changes) => dispatch => {
//   dispatch({ type: EDIT_PROJECT });
//   axiosWithAuth()
//     .put(`https://essentialism.herokuapp.com/api/essentialism/projects`)
//     .then()
//     .catch();
// };

// export const deleteProject = (projectid, userid) => dispatch => {
//   dispatch({ type: DELETE_PROJECT });
//   axiosWithAuth()
//     .delete(
//       `https://essentialism.herokuapp.com/api/essentialism/projects/${projectid}`
//     )
//     .then(res => {
//       dispatch({ type: DELETE_PROJECT_SUCCESS });
//       dispatch(fetchProjects(userid));
//     })
//     .catch(err => dispatch({ type: DELETE_PROJECT_FAILURE, payload: err }));
// };
