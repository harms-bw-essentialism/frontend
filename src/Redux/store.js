import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";

// Enable Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
