import {
  SELECT_VALUE,
  NARROW_VALUE,
  OTHER_VALUE,
  ADD_OTHER
} from "../Actions/types";

const initialState = {
  values: [
    { id: 0, name: "Athletics", selected: false, narrowed: false },
    { id: 1, name: "Art", selected: false, narrowed: false },
    { id: 2, name: "Career", selected: false, narrowed: false },
    { id: 3, name: "Creativity", selected: false, narrowed: false },
    { id: 4, name: "Community", selected: false, narrowed: false },
    { id: 5, name: "Education", selected: false, narrowed: false },
    { id: 6, name: "Friends", selected: false, narrowed: false },
    { id: 7, name: "Family", selected: false, narrowed: false },
    { id: 8, name: "Humor", selected: false, narrowed: false },
    { id: 9, name: "Independence", selected: false, narrowed: false },
    { id: 10, name: "Kindness", selected: false, narrowed: false },
    { id: 14, name: "Moral Principles", selected: false, narrowed: false },
    { id: 15, name: "Nature/Environment", selected: false, narrowed: false },
    { id: 16, name: "Relationships", selected: false, narrowed: false }
  ],
  isOther: false
};

export const valueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_VALUE:
      const newValues = state.values.map(item => {
        return payload.id === item.id
          ? { ...item, selected: !payload.selected }
          : { ...item };
      });
      const selected = newValues.filter(item =>
        item.selected ? { ...item } : null
      );
      return {
        ...state,
        values: newValues,
        selectedValues: selected,
        notNarrowedValues: selected
      };
    case NARROW_VALUE:
      const newNarrowedValues = [];
      const newNotNarrowedValues = [];
      state.notNarrowedValues.map(item => {});
      return {
        ...state,
        narrowedValues: newNarrowedValues,
        notNarrowedValues: newNotNarrowedValues
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
        narrowed: false
      };
      return {
        ...state,
        values: [...state.values, newValue],
        isOther: false
      };
    default:
      return state;
  }
};
