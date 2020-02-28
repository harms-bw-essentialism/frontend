import { SELECT_VALUE, MOST_VALUED } from "../Actions/types";

const initialState = {
  values: [
    { id: 0, name: "Athletics", selected: false, mostValued: false },
    { id: 1, name: "Art", selected: false, mostValued: false },
    { id: 2, name: "Career", selected: false, mostValued: false },
    { id: 3, name: "Creativity", selected: false, mostValued: false },
    { id: 4, name: "Community", selected: false, mostValued: false },
    { id: 5, name: "Education", selected: false, mostValued: false },
    { id: 6, name: "Friends", selected: false, mostValued: false },
    { id: 7, name: "Family", selected: false, mostValued: false },
    { id: 8, name: "Humor", selected: false, mostValued: false },
    { id: 9, name: "Independence", selected: false, mostValued: false },
    { id: 10, name: "Kindness", selected: false, mostValued: false },
    { id: 11, name: "Literature", selected: false, mostValued: false },
    { id: 12, name: "Mindfulness", selected: false, mostValued: false },
    { id: 13, name: "Music", selected: false, mostValued: false },
    { id: 14, name: "Moral Principles", selected: false, mostValued: false },
    { id: 15, name: "Nature/Environment", selected: false, mostValued: false },
    { id: 16, name: "Relationships", selected: false, mostValued: false }
  ],
  other: false,
  selectedValues: []
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
        selectedValues: selected
      };
    case MOST_VALUED:
      const mostValuedValues = state.values.map(item => {
        return payload.id === item.id
          ? { ...item, mostValued: !payload.mostValued }
          : { ...item };
      });
      return {
        ...state,
        selectedValues: mostValuedValues
      };
    default:
      return state;
  }
};
