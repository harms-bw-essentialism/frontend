import {
  SELECT_VALUE,
  TOP_THREE_VALUE,
  LOG_USER_IN,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  REGISTER_NEW_USER,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_FAILURE,
  LOG_USER_OUT,
  OTHER_VALUE,
  ADD_OTHER,
  SUBMIT_PROJECT,
  START_EDIT_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_VALUES,
  FETCH_VALUES_SUCCESS,
  FETCH_VALUES_FAILURE
} from "./types";
import Axios from "axios";
import { axiosWithAuth } from "../../Common/Utils/axiosWithAuth";

export const selectValue = item => dispatch => {
  dispatch({ type: SELECT_VALUE, payload: item });
};

export const narrowValue = item => dispatch => {
  dispatch({ type: TOP_THREE_VALUE, payload: item });
};

export const loginUser = userCredentials => dispatch => {
  dispatch({ type: LOG_USER_IN });
  Axios.post(
    `https://essentialism2020.herokuapp.com/api/essentialism/user/login`,
    userCredentials
  )
    .then(res => {
      dispatch({ type: LOG_USER_IN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOG_USER_IN_FAILURE, payload: err.message });
    });
};

export const registerUser = userCredentials => dispatch => {
  dispatch({ type: REGISTER_NEW_USER });
  Axios.post(
    `https://essentialism2020.herokuapp.com/api/essentialism/user/register`,
    userCredentials
  )
    .then(res => {
      dispatch({ type: REGISTER_NEW_USER_SUCCESS, payload: res.data });
      dispatch(loginUser(userCredentials));
    })
    .catch(err => {
      dispatch({ type: REGISTER_NEW_USER_FAILURE, payload: err.message });
    });
};

export const logoutUser = dispatch => {
  localStorage.removeItem("state");
  dispatch({ type: LOG_USER_OUT });
};

export const toggleOtherInput = bool => dispatch => {
  dispatch({ type: OTHER_VALUE, payload: bool });
};

export const addOther = value => dispatch => {
  dispatch({ type: ADD_OTHER, payload: value });
};

export const selectTopThree = values => dispatch => {
  dispatch({ type: TOP_THREE_VALUE, payload: values });
};

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
  dispatch({ type: SUBMIT_PROJECT, payload: project });
};

export const startEditingProject = projectEditingId => dispatch => {
  dispatch({ type: START_EDIT_PROJECT, payload: projectEditingId });
};

export const fetchValues = userid => dispatch => {
  dispatch({ type: FETCH_VALUES });
  axiosWithAuth()
    .get(
      `https://essentialism2020.herokuapp.com/api/essentialism/values/user/${userid}`
    )
    .then(res => {
      dispatch({ type: FETCH_VALUES_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_VALUES_FAILURE, payload: err }));
};
