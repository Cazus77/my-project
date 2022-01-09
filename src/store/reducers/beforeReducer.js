import { initialState } from "../initialState";

export const beforeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_BEFORE_DATA":
      return { ...state, selectedBeforeDate: action.payload };

    case "DELETE_BEFORE_DATA":
      return { ...state, selectedBeforeDate: action.payload };

    default:
      return state;
  }
};
