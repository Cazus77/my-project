import { combineReducers } from "redux";
import { untilReducer } from "./untilReducer";
import { fromReducer } from "./fromReducer";

export const rootReducer = combineReducers({
  inputUntil: untilReducer,
  inputFrom: fromReducer,
});
