import { createStore, applyMiddleware, compose } from "redux";
import { loadState, saveState } from "../Common/Utils/localStorage";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";

// Enable Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store
const persisitedState = loadState();
const store = createStore(
  rootReducer,
  persisitedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState(
      store.getState({
        values: store.getState().values,
        token: store.getState().user.token
      })
    );
  }, 1000)
);

export default store;
