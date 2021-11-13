import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";

export const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(`/users/friends/${currentId}`);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const response = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="chatOnline">
      {onlineFriends.map((online) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(online)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                online?.profilePicture
                  ? PF + online.profilePicture
                  : PF + "/person/noAvatar.png"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{online.username}</span>
        </div>
      ))}
    </div>
  );
};
