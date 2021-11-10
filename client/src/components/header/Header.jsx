import React from "react";
import "./header.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export const Header = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="topbarLogo">Sigma</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
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

          <img
            className="topbarImg"
            src="https://thispersondoesnotexist.com/image"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};
