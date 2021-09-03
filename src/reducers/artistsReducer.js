const initialState = {
  artistDetails: {},
  artists: [],
  fetchArtistsSuccess: false,
};

export const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ARTISTS_SUCCESS":
      return {
        ...state,
        fetchArtistsSuccess: true,
        artists: action.artists,
      };
    case "FETCH_ARTISTS_ERROR":
      return {
        ...state,
        fetchArtistsSuccess: false,
      };
    case "SET_ARTIST":
      return {
        ...state,
        artistDetails: action.artistDetails,
      };
    default:
      return state;
  }
};

export default artistsReducer;
