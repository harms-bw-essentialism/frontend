import { SUBMIT_PROJECT } from "../Actions";

const initialState = {
  projects: []
};

export const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            id: state.projects.length,
            name: payload.name,
            description: payload.description,
            value: payload.value
          }
        ]
      };
    default:
      return state;
  }
};
