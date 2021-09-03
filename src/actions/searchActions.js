import axios from "axios";

export const updateQuery = (query) => {
  return {
    type: "UDPATE_QUERY",
    query,
  };
};

export const fetchSuccess = (res) => {
  return {
    type: "FETCH_SUCCESS",
    res,
  };
};

export const fetchError = () => {
  return {
    type: "FETCH_ERROR",
  };
};

export const search = (query, type, accessToken) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.spotify.com/v1/search?q=${query}&type=${type}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(fetchSuccess(res.data));
  } catch (err) {
    dispatch(fetchError(err));
  }
};
