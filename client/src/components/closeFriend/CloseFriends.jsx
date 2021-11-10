import './closeFriends.css'

export const CloseFriends = ({user}) => {
  return (
    <li className="leftbarFriend">
      <img
        className="leftbarProfilePicture"
        src={user.profilePicture}
        alt="Friend Profile img"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
};
