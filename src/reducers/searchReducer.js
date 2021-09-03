const initialState = {
  query: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UDPATE_QUERY":
      return {
        ...state,
        query: action.query,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

export default searchReducer;
