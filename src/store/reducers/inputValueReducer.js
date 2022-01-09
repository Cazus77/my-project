import { initialState } from "../initialState";

export const inputValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_NUMBER_DAYS":
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
};
