import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { fetchUser } from "./actions/userActions";
import { setAccessToken } from "./actions/accessTokenActions";
import {
  playTrack,
  stopTrack,
  pauseTrack,
  resumeTrack,
  setCurrentTime,
} from "./actions/trackActions";
import "./App.css";

export const pauseAudio = (audio, dispatch) => {
  if (audio) {
    dispatch(pauseTrack());
    audio.pause();
  }
};

export const resumeAudio = (audio, dispatch) => {
  if (audio) {
    dispatch(resumeTrack());
    audio.play();
  }
};

export const audioControl = (track, volume, audio, setAudio, dispatch) => {
  if (audio) {
    dispatch(stopTrack());
    audio.pause();
  }

  const newAudio = new Audio(track.track.preview_url);
  newAudio.addEventListener("loadedmetadata", (e) => {
    track.duration = e.target.duration;
    dispatch(playTrack(track));
    newAudio.volume = volume / 100;
    newAudio.play();
  });
  newAudio.addEventListener("timeupdate", (e) => {
    dispatch(setCurrentTime(e.target.currentTime));
  });
  setAudio(newAudio);
};

const App = () => {
  const volume = useSelector((state) => state.volumeReducer.volume);
  const dispatch = useDispatch();

  const [audio, setAudio] = useState();

  useEffect(() => {
    let hash = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hash[e[1]] = decodeURIComponent(e[2]);
    }
    if (!hash.access_token) {
      window.location.href =
        "https://accounts.spotify.com/authorize?client_id=197b69e323f44f1bbb9eeb0088a62349&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=https://spotify-react-clone-app.web.app/";
    } else {
      dispatch(setAccessToken(hash.access_token));
    }
    window.location.hash = "";

    dispatch(fetchUser(hash.access_token));
  }, []);

  useEffect(() => {
    if (audio) {
      audio.volume = volume / 100;
    }
  });

  return (
    <div className="App">
      <div className="app-container">
        <SideBar />
        <Body audio={audio} setAudio={setAudio} />
      </div>
      <Footer audio={audio} setAudio={setAudio} />
    </div>
  );
};

export default App;
