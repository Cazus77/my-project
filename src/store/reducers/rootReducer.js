import { combineReducers } from "redux";
import { beforeReducer } from "./beforeReducer";
import { fromReducer } from "./fromReducer";

export const rootReducer = combineReducers({
  inputUntil: beforeReducer,
  inputFrom: fromReducer,
});
