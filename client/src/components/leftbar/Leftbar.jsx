import "./leftbar.css";
import {
  ChatBubbleOutline,
  Event,
  HelpOutline,
  PeopleAltOutlined,
  RssFeed,
  TurnedInNot,
  WorkOutline,
} from "@material-ui/icons";
 
export const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <ChatBubbleOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Chat</span>
          </li>
          <li className="leftbarListItem">
            <PeopleAltOutlined className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <TurnedInNot className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmark</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Job</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarListItemText">Event</span>
          </li>
        </ul>
        <button className="leftbarBtn">Show more</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img
              className="leftbarProfilePicture"
              src="https://thispersondoesnotexist.com/image"
              alt="Friend Profile img"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img
              className="leftbarProfilePicture"
              src="https://thispersondoesnotexist.com/image"
              alt="Friend Profile img"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img
              className="leftbarProfilePicture"
              src="https://thispersondoesnotexist.com/image"
              alt="Friend Profile img"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img
              className="leftbarProfilePicture"
              src="https://thispersondoesnotexist.com/image"
              alt="Friend Profile img"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img
              className="leftbarProfilePicture"
              src="https://thispersondoesnotexist.com/image"
              alt="Friend Profile img"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
          <li className="leftbarFriend">
            <img
              className="leftbarProfilePicture"
              src="https://thispersondoesnotexist.com/image"
              alt="Friend Profile img"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
