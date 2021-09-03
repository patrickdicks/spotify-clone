export const audioReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_AUDIO":
      return {
        ...state,
        audio: action.audio,
      };
    default:
      return state;
  }
};

export default audioReducer;
