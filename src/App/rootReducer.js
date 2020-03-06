import { combineReducers } from "redux";
import { onBoardingReducer } from "../Features/Onboarding/actions/onBoardingReducer";
import { projectsReducer } from "../Features/InputProjects/actions/projectsReducer";
import { valuesReducer } from "../Features/SelectValues/actions/valuesReducer";

export default combineReducers({
  user: onBoardingReducer,
  values: valuesReducer,
  projects: projectsReducer
});
