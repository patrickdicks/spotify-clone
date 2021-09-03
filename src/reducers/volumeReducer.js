const initialState = {
  volume: 100,
};

export const volumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VOLUME":
      return {
        ...state,
        volume: action.volume,
      };
    default:
      return state;
  }
};

export default volumeReducer;
