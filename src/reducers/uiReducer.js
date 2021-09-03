const initialState = {
  pageView: "Songs",
  selectedTrack: {
    id: "",
  },
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE_VIEW":
      return {
        ...state,
        pageView: action.pageView,
      };
    case "SET_SELECTED_TRACK":
      return {
        ...state,
        selectedTrack: action.selectedTrack,
      };
    default:
      return state;
  }
};

export default uiReducer;
