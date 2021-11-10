import React from "react";
import "./rightbar.css";
export const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="assets/gift.png"
            alt="friends birthday"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and<b> 3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAD" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://thispersondoesnotexist.com/image"
                alt="profile friend"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jane Doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://thispersondoesnotexist.com/image"
                alt="profile friend"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jane Doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://thispersondoesnotexist.com/image"
                alt="profile friend"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jane Doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://thispersondoesnotexist.com/image"
                alt="profile friend"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jane Doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://thispersondoesnotexist.com/image"
                alt="profile friend"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
