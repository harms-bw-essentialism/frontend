import { SELECT_VALUE, NARROW_VALUE } from "./types";

export const selectValue = item => dispatch => {
  dispatch({ type: SELECT_VALUE, payload: item });
};

export const narrowValue = item => dispatch => {
  dispatch({ type: NARROW_VALUE, payload: item });
};
