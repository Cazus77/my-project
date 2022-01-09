import { initialState } from "../initialState";

export const fromReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_FROM_DATA":
      return { ...state, selectedFromDate: action.payload };

    case "DELETE_FROM_DATA":
      return { ...state, selectedFromDate: action.payload };

    default:
      return state;
  }
};
