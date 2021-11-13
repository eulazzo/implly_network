import "./message.css";
import {format} from 'timeago.js'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
export const Message = ({ message,own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={"https://thispersondoesnotexist.com/image"}
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <p className="messageBottom">{format(message.createdAt)}</p>
    </div>
  );
};