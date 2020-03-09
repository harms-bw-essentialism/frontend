import {
  SELECT_VALUE,
  TOP_THREE_VALUE,
  OTHER_VALUE,
  ADD_OTHER,
  SUBMIT_VALUE,
  SUBMIT_VALUE_SUCCESS,
  SUBMIT_VALUE_FAILURE,
  DELETE_VALUE,
  DELETE_VALUE_SUCCESS,
  DELETE_VALUE_FAILURE,
  FETCH_VALUES,
  FETCH_VALUES_SUCCESS,
  FETCH_VALUES_FAILURE
} from "./types";
import { axiosWithAuth } from "../../../Common/Utils/axiosWithAuth";

export const selectValue = item => dispatch => {
  dispatch({ type: SELECT_VALUE, payload: item });
};

export const toggleOtherValueInput = bool => dispatch => {
  dispatch({ type: OTHER_VALUE, payload: bool });
};

export const addOtherValue = value => dispatch => {
  dispatch({ type: ADD_OTHER, payload: value });
};

export const selectedTopThree = values => dispatch => {
  dispatch({ type: TOP_THREE_VALUE, payload: values });
};

export const fetchValues = userid => dispatch => {
  dispatch({ type: FETCH_VALUES });
  axiosWithAuth()
    .get(
      `https://essentialism2020.herokuapp.com/api/essentialism/values/user/${userid}`
    )
    .then(res => dispatch({ type: FETCH_VALUES_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_VALUES_FAILURE, payload: err }));
};

export const submitValue = value => dispatch => {
  console.log(value);
  dispatch({ type: SUBMIT_VALUE });
  axiosWithAuth()
    .post(
      `https://essentialism2020.herokuapp.com/api/essentialism/values/`,
      value
    )
    .then(res => dispatch({ type: SUBMIT_VALUE_SUCCESS }))
    .catch(err => dispatch({ type: SUBMIT_VALUE_FAILURE, payload: err }));
};

export const deleteValue = valueId => dispatch => {
  dispatch({ type: DELETE_VALUE });
  axiosWithAuth()
    .delete(
      `https://essentialism2020.herokuapp.com/api/essenitialism/values/${valueId}`
    )
    .then(res => dispatch({ type: DELETE_VALUE_SUCCESS }))
    .catch(err => dispatch({ type: DELETE_VALUE_FAILURE, payload: err }));
};
