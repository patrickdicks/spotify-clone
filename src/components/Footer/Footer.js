import { useSelector } from "react-redux";
import TrackDetails from "../TrackDetails";
import Player from "../Player";
import VolumeSlider from "../VolumeSlider";
import "./Footer.css";

const Footer = ({ audio, setAudio }) => {
  const trackDetails = useSelector((state) => state.tracksReducer.trackDetails);

  return (
    <div className="footer">
      <div className="track-details-container">
        {trackDetails.track.id && <TrackDetails />}
      </div>
      <Player audio={audio} setAudio={setAudio} />
      <VolumeSlider />
    </div>
  );
};

export default Footer;
