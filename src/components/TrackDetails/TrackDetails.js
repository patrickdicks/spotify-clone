import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { setFavorite } from "../../actions/trackActions";
import "./TrackDetails.css";

const TrackDetails = () => {
  const trackDetails = useSelector((state) => state.tracksReducer.trackDetails);
  const favorite = useSelector((state) => state.tracksReducer.favorite);
  const dispatch = useDispatch();

  return (
    <div className="track-details">
      <img
        className="track-details-album-artwork"
        alt="Album Artwork"
        src={trackDetails.track.album.images[0].url}
      />
      <div className="track-details-text">
        <p className="track-details-track-name">{trackDetails.track.name}</p>
        <p className="track-details-album-name">
          {trackDetails.track.artists[0].name}
        </p>
      </div>
      <div className="track-details-favorite-icon">
        {!favorite && (
          <FavoriteBorderIcon
            fontSize="small"
            onClick={() => dispatch(setFavorite(true))}
          />
        )}
      </div>
      <div className="track-details-favorite-icon-white">
        {favorite && (
          <FavoriteIcon
            fontSize="small"
            onClick={() => dispatch(setFavorite(false))}
          />
        )}
      </div>
    </div>
  );
};

export default TrackDetails;
