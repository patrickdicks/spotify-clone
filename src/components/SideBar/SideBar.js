import { useSelector, useDispatch } from "react-redux";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AlbumIcon from "@material-ui/icons/Album";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { setPageView } from "../../actions/uiActions";
import "./SideBar.css";

const SideBar = () => {
  const pageView = useSelector((state) => state.uiReducer.pageView);
  const dispatch = useDispatch();

  return (
    <div className="side-bar">
      <img
        className="side-bar-logo"
        alt="Spotify"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      />
      <ul className="side-bar-list">
        <li
          className={
            pageView !== "Artists" && pageView !== "Albums"
              ? "side-bar-list-item-active"
              : "side-bar-list-item"
          }
          onClick={() => dispatch(setPageView("Songs"))}
        >
          <div className="side-bar-icon">
            <MusicNoteIcon />
          </div>
          Songs
        </li>
        <li
          className={
            pageView === "Albums"
              ? "side-bar-list-item-active"
              : "side-bar-list-item"
          }
          onClick={() => dispatch(setPageView("Albums"))}
        >
          <div className="side-bar-icon">
            <AlbumIcon />
          </div>
          Albums
        </li>
        <li
          className={
            pageView === "Artists"
              ? "side-bar-list-item-active"
              : "side-bar-list-item"
          }
          onClick={() => dispatch(setPageView("Artists"))}
        >
          <div className="side-bar-icon">
            <LibraryMusicIcon />
          </div>
          Artists
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
