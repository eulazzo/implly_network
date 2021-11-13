import "./message.css";

export const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://thispersondoesnotexist.com/image"
          alt=""
        />
        <p className="messageText">Hello! this is a message</p>
      </div>
      <p className="messageBottom">1 hour ago</p>
    </div>
  );
};
