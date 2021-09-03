const initialState = {
  fetchUserSuccess: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        fetchUserSuccess: true,
        user: action.user,
      };
    case "FETCH_USER_ERROR":
      return {
        ...state,
        fetchUserSuccess: false,
      };
    default:
      return state;
  }
};

export default userReducer;
