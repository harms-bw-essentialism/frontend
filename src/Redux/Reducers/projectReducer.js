import {
  SUBMIT_PROJECT,
  START_EDIT_PROJECT,
  FINISH_EDIT_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from "../Actions";

const initialState = {
  isFetching: false,
  projects: [],
  error: null
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
            projectName: payload.name,
            projectDescription: payload.description,
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
    case FETCH_PROJECTS:
      return {
        ...state,
        isFetching: true,
        projects: [],
        error: null
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        projects: payload,
        error: null
      };
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        projects: [],
        error: payload
      };
    default:
      return state;
  }
};
