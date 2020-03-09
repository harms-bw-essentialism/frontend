import {
  SUBMIT_PROJECT,
  SUBMIT_PROJECT_SUCCESS,
  SUBMIT_PROJECT_FAILURE,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_EDIT_PROJECT,
  FETCH_EDIT_PROJECT_SUCCESS,
  FETCH_EDIT_PROJECT_FAILURE,
  EDIT_PROJECT,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE
} from "./types";

const initialState = {
  isFetching: false,
  isSubmitting: false,
  projects: [],
  editingProject: [],
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
    case FETCH_EDIT_PROJECT:
      return {
        ...state,
        isFetching: true,
        editingProject: [],
        error: null
      };
    case FETCH_EDIT_PROJECT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        editingProject: payload,
        error: null
      };
    case FETCH_EDIT_PROJECT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    case EDIT_PROJECT:
      return {
        ...state
      };
    case EDIT_PROJECT_SUCCESS:
      return {
        ...state
      };
    case EDIT_PROJECT_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
