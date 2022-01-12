import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { spamFiler } from "./middleWare";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(spamFiler, thunk))
);

export default store;
