import { useDispatch, useSelector } from "react-redux";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import LinearProgress from "@material-ui/core/LinearProgress";
import { pauseAudio, resumeAudio, audioControl } from "../../App";
import { setSelectedTrack } from "../../actions/uiActions";
import { setShuffle, setRepeat } from "../../actions/trackActions";
import "./Player.css";

const skipPrev = (
  tracks,
  trackDetails,
  volume,
  audio,
  setAudio,
  audioControl,
  dispatch
) => {
  if (trackDetails.track.id && tracks.length > 0) {
    let prevTrack = trackDetails;
    if (trackDetails.index > 0) {
      prevTrack = tracks[trackDetails.index - 1];
    }
    audioControl(prevTrack, volume, audio, setAudio, dispatch);
    dispatch(setSelectedTrack(prevTrack.track));
  }
};

const skipNext = (
  tracks,
  trackDetails,
  volume,
  shuffleOn,
  audio,
  setAudio,
  audioControl,
  dispatch
) => {
  if (trackDetails.track.id && tracks.length > 1) {
    let nextTrack = tracks[0];
    if (shuffleOn) {
      let randTrackIndex = Math.floor(Math.random() * tracks.length);
      while (randTrackIndex === trackDetails.index) {
        randTrackIndex = Math.floor(Math.random() * tracks.length);
      }
      nextTrack = tracks[randTrackIndex];
    } else if (trackDetails.index < tracks.length - 1) {
      nextTrack = tracks[trackDetails.index + 1];
    }
    dispatch(setSelectedTrack(nextTrack.track));
    audioControl(nextTrack, volume, audio, setAudio, dispatch);
  }
};

const convertTime = (duration) => {
  if (!duration) {
    return "0:00";
  }
  let s = Math.floor(duration % 60);
  const m = Math.floor(duration / 60);
  s = s < 10 ? "0" + s : s;
  return m + ":" + s;
};

const Player = ({ audio, setAudio }) => {
  const trackPlaying = useSelector((state) => state.tracksReducer.trackPlaying);
  const tracks = useSelector((state) => state.tracksReducer.tracks);
  const trackDetails = useSelector((state) => state.tracksReducer.trackDetails);
  const volume = useSelector((state) => state.volumeReducer.volume);
  const shuffleOn = useSelector((state) => state.tracksReducer.shuffleOn);
  const repeatOn = useSelector((state) => state.tracksReducer.repeatOn);
  const currentTime = useSelector((state) => state.tracksReducer.currentTime);
  const dispatch = useDispatch();

  return (
    <div className="player">
      <div className="player-controls">
        <div className={shuffleOn ? "player-button-green " : "player-button"}>
          <ShuffleIcon
            fontSize="small"
            onClick={() => dispatch(setShuffle(!shuffleOn))}
          />
        </div>
        <div className="player-button">
          <SkipPreviousIcon
            onClick={() =>
              skipPrev(
                tracks,
                trackDetails,
                volume,
                audio,
                setAudio,
                audioControl,
                dispatch
              )
            }
          />
        </div>
        <div className="play-pause-button">
          {!trackPlaying && (
            <PlayCircleFilledIcon
              fontSize="large"
              onClick={() => resumeAudio(audio, dispatch)}
            />
          )}
          {trackPlaying && (
            <PauseCircleFilledIcon
              fontSize="large"
              onClick={() => pauseAudio(audio, dispatch)}
            />
          )}
        </div>
        <div className="player-button">
          <SkipNextIcon
            onClick={() =>
              skipNext(
                tracks,
                trackDetails,
                volume,
                shuffleOn,
                audio,
                setAudio,
                audioControl,
                dispatch
              )
            }
          />
        </div>
        <div className={repeatOn ? "player-button-green" : "player-button"}>
          <RepeatIcon
            fontSize="small"
            onClick={() => dispatch(setRepeat(!repeatOn))}
          />
        </div>
      </div>
      <div className="progress-bar-container">
        <p className="progress-start-label">{convertTime(currentTime)}</p>
        <div className="progress-bar">
          <LinearProgress variant="determinate" value={0} />
        </div>
        <p className="progress-end-label">
          {convertTime(trackDetails.duration)}
        </p>
      </div>
    </div>
  );
};

export default Player;
