import { combineReducers } from "redux";
import accessTokenReducer from "./accessTokenReducer";
import userReducer from "./userReducer";
import uiReducer from "./uiReducer";
import searchReducer from "./searchReducer";
import tracksReducer from "./tracksReducer";
import volumeReducer from "./volumeReducer";
import albumsReducer from "./albumsReducer";
import artistsReducer from "./artistsReducer";
import audioReducer from "./audioReducer";

export default combineReducers({
  accessTokenReducer,
  userReducer,
  uiReducer,
  searchReducer,
  tracksReducer,
  volumeReducer,
  albumsReducer,
  artistsReducer,
  audioReducer,
});
