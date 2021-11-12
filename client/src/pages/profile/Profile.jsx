import { Header } from "../../components/header/Header";
import { Leftbar } from "../../components/leftbar/Leftbar";
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";
import "./profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const {username} = useParams()
 
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
      console.log(`/users?username=${username}`)
    };
    getUser();
  }, [username]);


  return (
    <>
      <Header />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture ||PF+"person/noCover.jpg"}
                className="profileCoverImg"
                alt=""
              />
              <img
                src={user.profilePicture ||PF+"person/noAvatar.png"}
                className="profileUserImg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileInfoDesc">
                {user?.bio}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};
