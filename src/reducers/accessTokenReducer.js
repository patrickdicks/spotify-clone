const accessTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};

export default accessTokenReducer;
