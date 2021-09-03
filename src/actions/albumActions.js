import axios from "axios";

export const fetchAlbumTracksSuccess = (albumTracks) => {
  return {
    type: "FETCH_ALBUM_TRACKS_SUCCESS",
    albumTracks,
  };
};

export const fetchAlbumTracksError = () => {
  return {
    type: "FETCH_ALBUM_TRACKS_ERROR",
  };
};

export const searchAlbumTracks = (id, accessToken) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.spotify.com/v1/albums/${id}/tracks`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch(fetchAlbumTracksSuccess(res.data.items));
  } catch (err) {
    dispatch(fetchAlbumTracksError(err));
  }
};

export const fetchAlbumsSuccess = (albums) => {
  return {
    type: "FETCH_ALBUMS_SUCCESS",
    albums,
  };
};

export const fetchAlbumsError = () => {
  return {
    type: "FETCH_ALBUMS_ERROR",
  };
};

export const searchAlbums = (query, accessToken) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.spotify.com/v1/search?q=${query}&type=album`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    res.data.items = res.data.albums.items.map((item) => {
      return {
        album: item,
      };
    });
    dispatch(fetchAlbumsSuccess(res.data.items));
  } catch (err) {
    dispatch(fetchAlbumsError(err));
  }
};

export const setAlbum = (albumDetails) => {
  return {
    type: "SET_ALBUM",
    albumDetails,
  };
};
