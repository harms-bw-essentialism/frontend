import {
  SELECT_VALUE,
  TOP_THREE_VALUE,
  OTHER_VALUE,
  ADD_OTHER,
  SUBMIT_VALUE,
  SUBMIT_VALUE_SUCCESS,
  SUBMIT_VALUE_FAILURE
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

export const submitValue = value => dispatch => {
  dispatch({ type: SUBMIT_VALUE });
  axiosWithAuth()
    .post(
      `https://essentialism2020.herokuapp.com/api/essentialism/values/`,
      value
    )
    .then(res => dispatch({ type: SUBMIT_VALUE_SUCCESS }))
    .catch(err => dispatch({ type: SUBMIT_VALUE_FAILURE, payload: err }));
};
