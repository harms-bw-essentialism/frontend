import {
  SELECT_VALUE,
  TOP_THREE_VALUE,
  OTHER_VALUE,
  ADD_OTHER,
  FETCH_VALUES,
  FETCH_VALUES_SUCCESS,
  FETCH_VALUES_FAILURE,
  SUBMIT_VALUE,
  SUBMIT_VALUE_FAILURE,
  SUBMIT_VALUE_SUCCESS
} from "./types";

const initialState = {
  values: [
    { id: 0, name: "Athletics", selected: false, valueTopThree: false },
    { id: 1, name: "Art", selected: false, valueTopThree: false },
    { id: 2, name: "Career", selected: false, valueTopThree: false },
    { id: 3, name: "Creativity", selected: false, valueTopThree: false },
    { id: 4, name: "Community", selected: false, valueTopThree: false },
    { id: 5, name: "Education", selected: false, valueTopThree: false },
    { id: 6, name: "Friends", selected: false, valueTopThree: false },
    { id: 7, name: "Family", selected: false, valueTopThree: false },
    { id: 8, name: "Humor", selected: false, valueTopThree: false },
    { id: 9, name: "Independence", selected: false, valueTopThree: false },
    { id: 10, name: "Kindness", selected: false, valueTopThree: false },
    { id: 14, name: "Moral Principles", selected: false, valueTopThree: false },
    {
      id: 15,
      name: "Nature/Environment",
      selected: false,
      valueTopThree: false
    },
    { id: 16, name: "Relationships", selected: false, valueTopThree: false }
  ],
  isOther: false,
  topThreeValues: [],
  isFetching: false,
  isSubmitting: false,
  error: null
};

export const valuesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_VALUE:
      const newValues = state.values.map(item => {
        return payload.id === item.id
          ? { ...item, selected: !payload.selected }
          : { ...item };
      });
      return {
        ...state,
        values: newValues
      };

    case OTHER_VALUE:
      return {
        ...state,
        isOther: payload
      };
    case ADD_OTHER:
      const newValue = {
        id: state.values.length,
        name: payload,
        selected: true,
        valueTopThree: false
      };
      return {
        ...state,
        values: [...state.values, newValue],
        isOther: false
      };
    case TOP_THREE_VALUE:
      return {
        ...state,
        topThreeValues: [...payload]
      };
    case FETCH_VALUES:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_VALUES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        topThreeValues: payload
      };
    case FETCH_VALUES_FAILURE:
      return {
        ...state,
        isfetching: false,
        error: payload
      };
    case SUBMIT_VALUE:
      return {
        ...state,
        isSubmitting: true
      };
    case SUBMIT_VALUE_SUCCESS:
      return {
        ...state,
        isSubmitting: false
      };
    case SUBMIT_VALUE_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        error: payload
      };
    default:
      return state;
  }
};
