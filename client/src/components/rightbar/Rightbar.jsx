import React from "react";
import "./rightbar.css";
import { Users } from '../../dummyData'
import { Online } from "../online/Online";

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
           {
             Users.map(user=>(
               <Online key={user.id} user={user}/>
             ))
           }
        </ul>
      </div>
    </div>
  );
};
