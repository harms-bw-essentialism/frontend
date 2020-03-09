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
    { id: 0, valueName: "Athletics", selected: false },
    { id: 1, valueName: "Art", selected: false },
    { id: 2, valueName: "Career", selected: false },
    { id: 3, valueName: "Creativity", selected: false },
    { id: 4, valueName: "Community", selected: false },
    { id: 5, valueName: "Education", selected: false },
    { id: 6, valueName: "Friends", selected: false },
    { id: 7, valueName: "Family", selected: false },
    { id: 8, valueName: "Humor", selected: false },
    { id: 9, valueName: "Independence", selected: false },
    { id: 10, valueName: "Kindness", selected: false },
    { id: 14, valueName: "Moral Principles", selected: false },
    {
      id: 15,
      valueName: "Nature/Environment",
      selected: false
    },
    { id: 16, valueName: "Relationships", selected: false }
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
        valueName: payload,
        selected: true
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
