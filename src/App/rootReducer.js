import { combineReducers } from "redux";
import { valueReducer } from "../Redux/Reducers/valueReducer";
import { userReducer } from "../Redux/Reducers/userReducer";
import { projectReducer } from "../Redux/Reducers/projectReducer";

export default combineReducers({
  values: valueReducer,
  user: userReducer,
  projects: projectReducer
});
