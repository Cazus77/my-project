const initialState = {
  date: new Date(),
  selectedFromDate: null,
  selectedBeforeDate: null,
  inputValue: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_FROM_DATA":
      return { ...state, selectedFromDate: action.payload };

    case "SELECT_BEFORE_DATA":
      return { ...state, selectedBeforeDate: action.payload };

    case "DELETE_FROM_DATA":
      return { ...state, selectedFromDate: action.payload };

    case "DELETE_BEFORE_DATA":
      return { ...state, selectedBeforeDate: action.payload };

    case "INPUT_NUMBER_DAYS":
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
};
