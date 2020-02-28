import { combineReducers } from "redux";
import { valueReducer } from "../Redux/Reducers/valueReducer";

export default combineReducers({
  values: valueReducer
});
