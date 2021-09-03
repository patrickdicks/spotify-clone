const initialState = {
  trackDetails: {
    track: {
      id: "",
    },
  },
  tracks: [],
  fetchTracksSuccess: false,
  trackPlaying: false,
  shuffleOn: false,
  repeatOn: false,
  currentTime: 0,
};

export const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRACKS_SUCCESS":
      return {
        ...state,
        fetchTracksSuccess: true,
        tracks: action.tracks,
      };
    case "FETCH_TRACKS_ERROR":
      return {
        ...state,
        fetchTracksSuccess: false,
      };
    case "PLAY_TRACK":
      return {
        ...state,
        trackPlaying: true,
        trackDetails: action.track,
      };
    case "STOP_TRACK":
      return {
        ...state,
        trackPlaying: false,
      };
    case "PAUSE_TRACK":
      return {
        ...state,
        trackPlaying: false,
      };
    case "RESUME_TRACK":
      return {
        ...state,
        trackPlaying: true,
      };
    case "SET_SHUFFLE":
      return {
        ...state,
        shuffleOn: action.shuffleOn,
      };
    case "SET_REPEAT":
      return {
        ...state,
        repeatOn: action.repeatOn,
      };
    case "SET_FAVORITE":
      return {
        ...state,
        favorite: action.favorite,
      };
    case "SET_CURRENT_TIME":
      return {
        ...state,
        currentTime: action.currentTime,
      };
    default:
      return state;
  }
};

export default tracksReducer;
