import { useSelector } from "react-redux";
import Header from "../Header";
import TrackList from "../TrackList";
import Albums from "../Albums";
import Artists from "../Artists";
import "./Body.css";

const Body = ({ audio, setAudio }) => {
  const pageView = useSelector((state) => state.uiReducer.pageView);

  return (
    <div className="body">
      <Header />
      {pageView !== "Albums" && pageView !== "Artists" && (
        <TrackList audio={audio} setAudio={setAudio} />
      )}
      {pageView === "Albums" && <Albums />}
      {pageView === "Artists" && <Artists />}
    </div>
  );
};

export default Body;
