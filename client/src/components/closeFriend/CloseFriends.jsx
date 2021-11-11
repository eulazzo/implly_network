import "./closeFriends.css";

export const CloseFriends = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="leftbarFriend">
      <img
        className="leftbarProfilePicture"
        src={PF + user.profilePicture}
        alt="Friend Profile img"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
};
