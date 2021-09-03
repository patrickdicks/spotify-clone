import { useSelector, useDispatch } from "react-redux";
import { searchTracks } from "../../actions/trackActions";
import { setPageView } from "../../actions/uiActions";
import "./Artists.css";

const Artists = () => {
  const accessToken = useSelector(
    (state) => state.accessTokenReducer.accessToken
  );
  const artists = useSelector((state) => state.artistsReducer.artists);
  const fetchArtistsSuccess = useSelector(
    (state) => state.artistsReducer.fetchArtistsSuccess
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Top result</h2>
      {fetchArtistsSuccess && (
        <div className="artists-container">
          <div
            className="artist-container"
            onClick={() => {
              dispatch(searchTracks(artists[0].name, accessToken));
              dispatch(setPageView("Songs"));
            }}
          >
            <img
              className="artist-image"
              alt="Artist"
              src={artists[0].images[0].url}
            />
            <div className="artists-details-container">
              <div className="artists-details">
                <p className="artists-artist-name">{artists[0].name}</p>
                <span className="artist-artist-text">ARTIST</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artists;
