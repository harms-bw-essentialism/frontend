import {
  SUBMIT_PROJECT,
  SUBMIT_PROJECT_SUCCESS,
  SUBMIT_PROJECT_FAILURE,
  START_EDIT_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_EDIT_PROJECT,
  FETCH_EDIT_PROJECT_SUCCESS,
  FETCH_EDIT_PROJECT_FAILURE,
  EDIT_PROJECT,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE,
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE
} from "./types";

import { axiosWithAuth } from "../../../Common/Utils/axiosWithAuth";

export const fetchProjects = userId => dispatch => {
  dispatch({ type: FETCH_PROJECTS });
  axiosWithAuth()
    .get(
      `https://essentialism2020.herokuapp.com/api/essentialism/projects/user/${userId}`
    )
    .then(res => {
      dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err });
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

export const fetchEditingProject = projectid => dispatch => {
  dispatch({ type: FETCH_EDIT_PROJECT });
  axiosWithAuth()
    .get(
      `https://essentialism2020.herokuapp.com/api/essentialism/projects/${projectid}`
    )
    .then(res => {
      dispatch({ type: FETCH_EDIT_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_EDIT_PROJECT_FAILURE, payload: err }));
};

export const editProject = (projectId, projectChanges) => dispatch => {
  console.log(`projectId: `, projectId);
  const changes = {
    projectName: projectChanges.projectName,
    projectDescription: projectChanges.projectDescription,
    userId: projectChanges.userId,
    value: projectChanges.value
  };
  console.log(`changes: `, changes);
  dispatch({ type: EDIT_PROJECT });
  axiosWithAuth()
    .put(
      `https://essentialism.herokuapp.com/api/essentialism/projects/${projectId}`,
      changes
    )
    .then(res => {
      dispatch({ type: EDIT_PROJECT_SUCCESS });
      dispatch(fetchProjects(changes.userId));
    })
    .catch(err => dispatch({ type: EDIT_PROJECT_FAILURE, payload: err }));
};

export const deleteProject = (projectid, userid) => dispatch => {
  dispatch({ type: DELETE_PROJECT });
  axiosWithAuth()
    .delete(
      `https://essentialism.herokuapp.com/api/essentialism/projects/${projectid}`
    )
    .then(res => {
      dispatch({ type: DELETE_PROJECT_SUCCESS });
      dispatch(fetchProjects(userid));
    })
    .catch(err => dispatch({ type: DELETE_PROJECT_FAILURE, payload: err }));
};
