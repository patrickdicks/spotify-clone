import { useSelector, useDispatch } from "react-redux";
import { searchTracks } from "../../actions/trackActions";
import { searchAlbums } from "../../actions/albumActions";
import { searchArtists } from "../../actions/artistActions";
import { updateQuery } from "../../actions/searchActions";
import "./SearchBar.css";

const SearchBar = () => {
  const query = useSelector((state) => state.searchReducer.query);
  const accessToken = useSelector(
    (state) => state.accessTokenReducer.accessToken
  );
  const pageView = useSelector((state) => state.uiReducer.pageView);
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (pageView === "Albums") {
            dispatch(searchAlbums(query, accessToken));
          } else if (pageView === "Artists") {
            dispatch(searchArtists(query, accessToken));
          } else {
            dispatch(searchTracks(query, accessToken));
          }
        }}
      >
        <input
          className="search-bar-search-input"
          type="text"
          maxLength="80"
          placeholder="Artists, songs, or podcasts"
          onChange={(e) => dispatch(updateQuery(e.target.value))}
        />
      </form>
    </div>
  );
};

export default SearchBar;
