import "./header.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img className="logo" src="/assets/logo_v2.svg" alt="logo" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbarLogo">Implly</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Search for friends or post"
            type="text"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="toparbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">10</span>
          </div>

          <Link to={`profile/${user.username}`}>
            <img
              className="topbarImg"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : `${PF}/person/noAvatar.png`
              }
              alt="profile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
