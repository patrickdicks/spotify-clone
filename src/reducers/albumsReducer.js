const initialState = {
  albumDetails: {
    id: "",
    artists: [{ url: "" }],
  },
  albumTracks: [],
  albums: [],
  fetchAlbumsSuccess: false,
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALBUM_TRACKS_SUCCESS":
      return {
        ...state,
        fetchAlbumTracksSuccess: true,
        albumTracks: action.albumTracks,
      };
    case "FETCH_ALBUM_TRACKS_ERROR":
      return {
        ...state,
        fetchAlbumTracksSuccess: false,
      };
    case "FETCH_ALBUMS_SUCCESS":
      return {
        ...state,
        fetchAlbumsSuccess: true,
        albums: action.albums,
      };
    case "FETCH_ALBUMS_ERROR":
      return {
        ...state,
        fetchAlbumsSuccess: false,
      };
    case "SET_ALBUM":
      return {
        ...state,
        albumDetails: action.albumDetails,
      };
    default:
      return state;
  }
};

export default albumsReducer;
