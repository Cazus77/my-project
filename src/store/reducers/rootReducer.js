// import { combineReducers } from "redux";
// import { beforeReducer } from "./beforeReducer";
// import { fromReducer } from "./fromReducer";
import { initialState } from "../initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_CHANGE":
      console.log(1);
      return;

    case "CLICK_DATE_FROM":
      console.log(2);
      return;

    case "CLICK_DATE_BEFORE":
      console.log(3);
      return;
    default:
      return state;
  }
};

// export const rootReducer = combineReducers({
//   inputBefore: beforeReducer,
//   inputFrom: fromReducer,
// });
