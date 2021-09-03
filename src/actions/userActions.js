import axios from "axios";

export const fetchUserSuccess = (user) => {
  return {
    type: "FETCH_USER_SUCCESS",
    user,
  };
};

export const fetchUserError = () => {
  return {
    type: "FETCH_USER_ERROR",
  };
};

export const fetchUser = (accessToken) => async (dispatch) => {
  try {
    const res = await axios.get(`https://api.spotify.com/v1/me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(fetchUserSuccess(res));
  } catch (err) {
    dispatch(fetchUserError(err));
  }
};
