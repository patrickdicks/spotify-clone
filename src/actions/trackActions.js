import axios from "axios";

export const fetchTracksSuccess = (tracks) => {
  return {
    type: "FETCH_TRACKS_SUCCESS",
    tracks,
  };
};

export const fetchTracksError = () => {
  return {
    type: "FETCH_TRACKS_ERROR",
  };
};

export const searchTracks = (query, accessToken) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.spotify.com/v1/search?q=${query}&type=track`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    res.data.items = res.data.tracks.items.map((item, i) => {
      return {
        track: item,
        index: i,
      };
    });
    dispatch(fetchTracksSuccess(res.data.items));
  } catch (err) {
    dispatch(fetchTracksError(err));
  }
};

export const playTrack = (track) => {
  return {
    type: "PLAY_TRACK",
    track,
  };
};

export const stopTrack = () => {
  return {
    type: "STOP_TRACK",
  };
};

export const pauseTrack = () => {
  return {
    type: "PAUSE_TRACK",
  };
};

export const resumeTrack = () => {
  return {
    type: "RESUME_TRACK",
  };
};

export const setShuffle = (shuffleOn) => {
  return {
    type: "SET_SHUFFLE",
    shuffleOn,
  };
};

export const setRepeat = (repeatOn) => {
  return {
    type: "SET_REPEAT",
    repeatOn,
  };
};

export const setFavorite = (favorite) => {
  return {
    type: "SET_FAVORITE",
    favorite,
  };
};

export const setCurrentTime = (currentTime) => {
  return {
    type: "SET_CURRENT_TIME",
    currentTime,
  };
};
