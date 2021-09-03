import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import Slider from "@material-ui/core/Slider";
import { setVolume } from "../../actions/volumeActions";
import "./VolumeSlider.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    "& .volume-icon": {
      color: "#b3b3b3",
      "&:hover": {
        color: "#fff",
      },
    },
    "& .slider": {
      marginLeft: 8,
      width: 93,
      cursor: "default",
      color: "#b3b3b3",
    },
    "& .MuiSlider-thumb": {
      width: 0,
    },
    "&:hover": {
      "& .slider": {
        color: "green",
      },
      "& .MuiSlider-thumb": {
        height: 12,
        width: 12,
        boxShadow: "none",
        color: "#fff",
      },
    },
  },
});

const VolumeSlider = () => {
  const volume = useSelector((state) => state.volumeReducer.volume);
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div className="volume-slider-container">
      <div className={classes.root}>
        {volume > 0 && (
          <VolumeUpIcon
            className="volume-icon"
            fontSize="small"
            onClick={() => dispatch(setVolume(0))}
          />
        )}
        {volume <= 0 && (
          <VolumeOffIcon
            className="volume-icon"
            fontSize="small"
            onClick={() => dispatch(setVolume(50))}
          />
        )}
        <Slider
          className="slider"
          min={0}
          max={100}
          value={volume}
          onChange={(_, value) => dispatch(setVolume(value))}
        />
      </div>
    </div>
  );
};

export default VolumeSlider;
