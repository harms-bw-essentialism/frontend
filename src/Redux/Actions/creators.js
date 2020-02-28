import { SELECT_VALUE } from "./types";

export const selectValue = item => dispatch => {
  dispatch({ type: SELECT_VALUE, payload: item });
};
