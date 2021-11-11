import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import { Online } from "../online/Online";

export const Rightbar = ({ profile }) => {

  const HomeRightbar = () => {
    return (
      <>
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
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Eua</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://thispersondoesnotexist.com/image"
              alt=""
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://thispersondoesnotexist.com/image"
              alt=""
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://thispersondoesnotexist.com/image"
              alt=""
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://thispersondoesnotexist.com/image"
              alt=""
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://thispersondoesnotexist.com/image"
              alt=""
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://thispersondoesnotexist.com/image"
              alt=""
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ?  <ProfileRightbar /> : <HomeRightbar/>}
      </div>
    </div>
  );
};
