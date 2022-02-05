import "./post.css";
import { FavoriteBorder, MoreVert } from "@material-ui/icons";
import Bookmark from "@material-ui/icons/BookmarkBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import ShareIcon from "@material-ui/icons/Share";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ModalOptions from "../ModalOptions/ModalOptions";

export const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  let [style, setStyle] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let [likeCounter, setLikeCounter] = useState(post.likes.length);
  const { user: currentUser } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      setUser(response.data);
    };
    getUser();
  }, [post.userId]);

  const likeHandler = async () => {
    setLikeCounter(isLiked ? likeCounter - 1 : likeCounter + 1);
    setIsLiked(!isLiked);

    if (!isLiked) setStyle("#4718AD");
    else setStyle("#000");

    try {
      await axios.put(`posts/${post._id}/like`, { userId: currentUser._id });
    } catch (error) {
      console.log(error);
    }
  };
  // TODO:change this after
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt="profile"
              />
            </Link>
            <span className="postUsername">{user?.username}</span>
            <span className="postdate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert
              className="moreVert"
              onClick={() => setModalIsOpen(!modalIsOpen)}
            />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <ul className="userOptionsToReact">
            <li className="postShowCounter">
              {isLiked ? (
                <FavoriteIcon
                  onClick={likeHandler}
                  style={{ color: style }}
                  className="postHeart"
                />
              ) : (
                <ThumbUpOutlinedIcon className="postHeart" />
              )}
              <span className="countLikes">{likeCounter}</span>
            </li>
            <li className="postShowCounter">
              <span className="countComment">34</span>
              <span className="commentTxt">Comments</span>
            </li>
            <li className="postShowCounter">
              <span className="countShares">34</span>
              <span className="commentTxt">Shares</span>
            </li>
          </ul>
        </div>

        {/* react to a post */}
        <div className="postUserOptions">
          <ul className="postOptionsContainer">
            <li className="postshowOption">
              <ThumbUpOutlinedIcon
                // style={{ color: style }}
                onClick={likeHandler}
                className="postIcon"
              />
              <span onClick={likeHandler}>{isLiked ? "Dislike" : "Like"}</span>
            </li>
            <li className="postshowOption">
              <ChatBubbleOutlineIcon className="postIcon" />
              <span>Comment</span>
            </li>
            <li className="postshowOption">
              <ShareIcon className="postIcon" />
              <span>Share</span>
            </li>
            <li className="postshowOption ">
              <Bookmark className="postIcon" />
              <span className="saveTxt">Save</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
