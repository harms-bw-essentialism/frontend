import { SELECT_VALUE } from "../Actions/types";

const initialState = {
  values: [
    { id: 0, name: "Athletics", selected: false },
    { id: 1, name: "Art", selected: false },
    { id: 2, name: "Career", selected: false },
    { id: 3, name: "Creativity", selected: false },
    { id: 4, name: "Community", selected: false },
    { id: 5, name: "Education", selected: false },
    { id: 6, name: "Friends", selected: false },
    { id: 7, name: "Family", selected: false },
    { id: 8, name: "Humor", selected: false },
    { id: 9, name: "Independence", selected: false },
    { id: 10, name: "Kindness", selected: false },
    { id: 11, name: "Literature", selected: false },
    { id: 12, name: "Mindfulness", selected: false },
    { id: 13, name: "Music", selected: false },
    { id: 14, name: "Moral Principles", selected: false },
    { id: 15, name: "Nature and the Environment", selected: false },
    { id: 16, name: "Relationships", selected: false }
  ],
  other: false
};

export const valueReducer = (state = initialState, { type, payload }) => {
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

    default:
      return state;
  }
};
