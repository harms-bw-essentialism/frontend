import { SELECT_VALUE, MOST_VALUED } from "./types";

export const selectValue = item => dispatch => {
  dispatch({ type: SELECT_VALUE, payload: item });
};

export const valuedMost = item => dispatch => {
  dispatch({ type: MOST_VALUED, payload: item });
};
