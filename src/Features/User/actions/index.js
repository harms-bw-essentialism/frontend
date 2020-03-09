import {
  LOG_USER_IN,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  REGISTER_NEW_USER,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_FAILURE,
  LOG_USER_OUT
} from "./types";
import axios from "axios";

export const loginUser = userCredentials => dispatch => {
  dispatch({ type: LOG_USER_IN });
  axios
    .post(
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
  axios
    .post(
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
