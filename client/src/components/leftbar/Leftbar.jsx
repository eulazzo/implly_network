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
import { CloseFriends } from "../closeFriend/CloseFriends";
import { Users } from "../../dummyData";

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
          {Users.map(user=> (
            <CloseFriends key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};
