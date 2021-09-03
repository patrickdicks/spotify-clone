import { useSelector, useDispatch } from "react-redux";
import { setSelectedTrack } from "../../actions/uiActions";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import "./AlbumTracks.css";

const AlbumTracks = ({ pauseTrack, resumeTrack, audioControl, setAudio }) => {
  const albumDetails = useSelector((state) => state.albumsReducer.albumDetails);
  const albumTracks = useSelector((state) => state.albumsReducer.albumTracks);
  const trackDetails = useSelector((state) => state.tracksReducer.trackDetails);
  const selectedTrack = useSelector((state) => state.uiReducer.selectedTrack);
  const trackPlaying = useSelector((state) => state.tracksReducer.trackPlaying);
  const dispatch = useDispatch();

  return (
    <div>
      <img
        className="album-tracks-artist-image"
        alt="Album Artist"
        src={albumDetails.artists[0].images[0].url}
      />
      <p className="album-tracks-album-name">{albumDetails.name}</p>
      <p className="album-tracks-artist-name">{`${albumDetails.artists[0].name} • 2020 • 11 songs,`}</p>
      <div className="album-tracks-menu"></div>
      <ul className="album-tracks-list">
        {albumTracks.map((item, i) => {
          return (
            <li
              className={
                item.id === selectedTrack.id
                  ? "album-tracks-track-selected"
                  : "album-tracks-track"
              }
              key={item.id}
              onClick={() => dispatch(setSelectedTrack(item))}
            >
              <div className="album-tracks-play-pause-icon">
                {!trackPlaying && trackDetails.track.id === item.id && (
                  <PlayArrowIcon
                    onClick={() => {
                      resumeTrack();
                    }}
                  />
                )}
                {!trackPlaying && trackDetails.track.id !== item.id && (
                  <PlayArrowIcon
                    onClick={() => {
                      audioControl({ track: item }, i);
                    }}
                  />
                )}
                <div className="pause-track-button">
                  {trackPlaying && trackDetails.track.id === item.id && (
                    <PauseIcon
                      onClick={() => {
                        pauseTrack();
                      }}
                    />
                  )}
                </div>
                {trackPlaying && trackDetails.track.id !== item.id && (
                  <PlayArrowIcon
                    onClick={() => {
                      audioControl({ track: item });
                    }}
                  />
                )}
              </div>
              <div className="album-tracks-track-name-artist-name">
                <p className="album-tracks-track-name">{item.name}</p>
                <p className="album-tracks-track-artist-name">
                  {albumDetails.artists[0].name}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AlbumTracks;
