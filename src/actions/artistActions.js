import axios from "axios";

export const fetchArtistsSuccess = (artists) => {
  return {
    type: "FETCH_ARTISTS_SUCCESS",
    artists,
  };
};

export const fetchArtistsError = () => {
  return {
    type: "FETCH_ARTISTS_ERROR",
  };
};

export const searchArtists = (query, accessToken) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.spotify.com/v1/search?q=${query}&type=artist`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(fetchArtistsSuccess(res.data.artists.items));
  } catch (err) {
    dispatch(fetchArtistsError(err));
  }
};

export const setArtist = (artistDetails) => {
  return {
    type: "SET_ARTIST",
    artistDetails,
  };
};
