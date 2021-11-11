import { Header } from "../../components/header/Header";
import { Leftbar } from "../../components/leftbar/Leftbar";
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";
import "./profile.css";

export const Profile = () => {
  return (
    <>
      <Header />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                className="profileCoverImg"
                alt=""
              />
              <img
                src="https://thispersondoesnotexist.com/image"
                className="profileUserImg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Anna Louise</h4>
              <span className="profileInfoDesc">
                Be nice to everyone, even if they're not
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};
