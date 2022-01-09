import { combineReducers } from "redux";
import { fromReducer } from "./fromReducer";
import { beforeReducer } from "./beforeReducer";
import { inputValueReducer } from "./inputValueReducer";

export const rootReducer = combineReducers({
  fromReducer: fromReducer,
  beforeReducer: beforeReducer,
  inputValueReducer: inputValueReducer,
});
