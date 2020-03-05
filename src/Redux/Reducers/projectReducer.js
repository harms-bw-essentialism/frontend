import {
  SUBMIT_PROJECT,
  START_EDIT_PROJECT,
  FINISH_EDIT_PROJECT
} from "../Actions";

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
            value: payload.value,
            isEditing: false,
            isDeleting: false
          }
        ]
      };
    case START_EDIT_PROJECT:
      const projectsEditing = state.projects.filter(project => {
        return project.id === payload
          ? { ...project, isEditing: true }
          : { ...project };
      });
      return {
        ...state,
        projects: projectsEditing
      };
    case FINISH_EDIT_PROJECT:
      return {
        ...state
      };
    default:
      return state;
  }
};
