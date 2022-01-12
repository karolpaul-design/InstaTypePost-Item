import { combineReducers } from "redux";
import { likesReducer } from "./likes-reducer";
import { inputReducer } from "./input-reducer";
import { commentsReducer } from "./comments-reducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
  appReducer,
});
