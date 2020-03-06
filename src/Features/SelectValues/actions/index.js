import { SELECT_VALUE, TOP_THREE_VALUE, OTHER_VALUE, ADD_OTHER } from "./types";

export const selectValue = item => dispatch => {
  dispatch({ type: SELECT_VALUE, payload: item });
};
export const valueIsTopThree = item => dispatch => {
  dispatch({ type: TOP_THREE_VALUE, payload: item });
};

export const toggleOtherValueInput = bool => dispatch => {
  dispatch({ type: OTHER_VALUE, payload: bool });
};

export const addOtherValue = value => dispatch => {
  dispatch({ type: ADD_OTHER, payload: value });
};

export const selectTopThree = values => dispatch => {
  dispatch({ type: TOP_THREE_VALUE, payload: values });
};
