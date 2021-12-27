const initialState = {
  date: new Date(),
  selectedFromDate: null,
  selectedBeforeDate: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_FROM_DATA":
      return { ...state, selectedFromDate: action.payload };
    case "SELECT_BEFORE_DATA":
      return { ...state, selectedBeforeDate: action.payload };
    default:
      return state;
  }
};
