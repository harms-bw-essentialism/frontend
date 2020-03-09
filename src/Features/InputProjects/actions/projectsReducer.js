import {
  SUBMIT_PROJECT,
  SUBMIT_PROJECT_SUCCESS,
  SUBMIT_PROJECT_FAILURE,
  START_EDIT_PROJECT,
  FINISH_EDIT_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from "./types";

const initialState = {
  isFetching: false,
  isSubmitting: false,
  projects: [],
  error: null
};

export const projectsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_PROJECT:
      return {
        ...state,
        isSubmitting: true
      };
    case SUBMIT_PROJECT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        error: null
      };
    case SUBMIT_PROJECT_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        error: payload
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
