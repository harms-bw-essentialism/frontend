import { combineReducers } from "redux";
import { valueReducer } from "../Redux/Reducers/valueReducer";
import { userReducer } from "../Redux/Reducers/userReducer";

export default combineReducers({
  values: valueReducer,
  user: userReducer
});
