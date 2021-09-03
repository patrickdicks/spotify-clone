import { useSelector } from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./UserDetails.css";

const UserDetails = () => {
  const user = useSelector((state) => state.userReducer.user);
  const fetchUserSuccess = useSelector(
    (state) => state.userReducer.fetchUserSuccess
  );

  return (
    <div className="user-details">
      <div className="user-details-user-image-container">
        {fetchUserSuccess && (
          <img
            className="user-details-user-image"
            alt="User"
            src={user.data.images[0].url}
          />
        )}
      </div>
      <p className="user-details-display-name">Spotify Clone</p>
      <ArrowDropDownIcon />
    </div>
  );
};

export default UserDetails;
