import "./online.css";

export const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt="profile friend"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username }</span>
    </li>
  );
};
