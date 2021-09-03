import { useSelector, useDispatch } from "react-redux";
import { searchTracks } from "../../actions/trackActions";
import { setPageView } from "../../actions/uiActions";
import "./Albums.css";

const Albums = () => {
  const accessToken = useSelector(
    (state) => state.accessTokenReducer.accessToken
  );
  const albums = useSelector((state) => state.albumsReducer.albums);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Albums</h2>
      <div className="albums">
        {albums.map((item, i) => {
          return (
            <div
              className="albums-album-container"
              key={item.album.id}
              onClick={() => {
                dispatch(searchTracks(item.album.artists[0].name, accessToken));
                dispatch(setPageView("Songs"));
              }}
            >
              <img
                className="albums-album-image"
                alt="artwork"
                src={item.album.images[0].url}
              />
              <div className="albums-info-text">
                <p className="albums-album-name">{item.album.name}</p>
                <p className="albums-artist-name">
                  {item.album.artists[0].name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
