import { useSelector, useDispatch } from "react-redux";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { pauseAudio, resumeAudio, audioControl } from "../../App";
import { setSelectedTrack } from "../../actions/uiActions";
import "./TrackList.css";

const convertTrackLength = (ms) => {
  const m = Math.floor(ms / 60000);
  const s = ((ms % 60000) / 1000).toFixed(0);
  return m + ":" + (s < 10 ? "0" : "") + s;
};

const TrackList = ({ audio, setAudio }) => {
  const tracks = useSelector((state) => state.tracksReducer.tracks);
  const trackPlaying = useSelector((state) => state.tracksReducer.trackPlaying);
  const trackDetails = useSelector((state) => state.tracksReducer.trackDetails);
  const volume = useSelector((state) => state.volumeReducer.volume);
  const selectedTrack = useSelector((state) => state.uiReducer.selectedTrack);
  const dispatch = useDispatch();

  return (
    <div className="song-list">
      <h2 className="header-title">Songs</h2>
      <div className="track-menu">
        <div className="track-number">#</div>
        <div className="track-title">TITLE</div>
        <div className="track-album">ALBUM</div>
        <div className="track-length-icon">
          <QueryBuilderIcon fontSize="small" />
        </div>
      </div>
      <ul className="track-list">
        {tracks.map((item, i) => {
          return (
            <li
              className={
                item.track.id === selectedTrack.id
                  ? "track-list-item-active"
                  : "track-list-item"
              }
              key={item.track.id}
              onClick={() => dispatch(setSelectedTrack(item.track))}
            >
              <div className="play-track-button">
                {!trackPlaying && trackDetails.track.id === item.track.id && (
                  <PlayArrowIcon
                    onClick={() => {
                      resumeAudio(audio, dispatch);
                    }}
                  />
                )}
                {!trackPlaying && trackDetails.track.id !== item.track.id && (
                  <PlayArrowIcon
                    onClick={() => {
                      audioControl(item, volume, audio, setAudio, dispatch);
                    }}
                  />
                )}
                <div className="pause-track-button">
                  {trackPlaying && trackDetails.track.id === item.track.id && (
                    <PauseIcon
                      onClick={() => {
                        pauseAudio(audio, dispatch);
                      }}
                    />
                  )}
                </div>
                {trackPlaying && trackDetails.track.id !== item.track.id && (
                  <PlayArrowIcon
                    onClick={() => {
                      audioControl(item, volume, audio, setAudio, dispatch);
                    }}
                  />
                )}
              </div>
              <div className="track-list-item-container">
                <div className="track-list-track-details">
                  <img
                    className="track-album-image"
                    alt="artwork"
                    src={item.track.album.images[0].url}
                  />
                  <div>
                    <p
                      className={
                        item.track.id === trackDetails.track.id
                          ? "track-name-playing"
                          : "track-name"
                      }
                    >
                      {item.track.name}
                    </p>
                    <p className="artist-name">{item.track.artists[0].name}</p>
                  </div>
                </div>
              </div>
              <p className="track-album-name">{item.track.album.name}</p>
              <p className="track-length">
                {convertTrackLength(item.track.duration_ms)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrackList;
