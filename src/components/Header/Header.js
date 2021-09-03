import SearchBar from "../SearchBar";
import UserDetails from "../UserDetails";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <SearchBar />
      <UserDetails />
    </div>
  );
};

export default Header;
