import { SELECT_VALUE, USER_SELECTED_VALUES } from "./types";

export const selectValue = item => dispatch => {
  dispatch({ type: SELECT_VALUE, payload: item });
};

export const userSelectedValues = dispatch => {
  dispatch({ type: USER_SELECTED_VALUES });
};
export const userNarrowedValues = dispatch => {
  dispatch({ type: USER_SELECTED_VALUES });
};
export const userEnteredProjects = dispatch => {
  dispatch({ type: USER_SELECTED_VALUES });
};
