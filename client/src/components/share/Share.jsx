import "./share.css";
import {
  Label,
  PermMedia,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const postDescription = useRef();

  const submitPost = async (event) => {
    event.preventDefault();
    const newPost = {
      userId: user._id,
      desc: postDescription.current.value,
      img: null,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        //post the image itself
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    if (file || postDescription.current.value) {
      try {
        await axios.post("/posts", newPost);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const selectImage = (event) => {
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    const selectedFile = event.target.files[0];
    if (allowedTypes.includes(selectedFile.type)) setFile(selectedFile);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareprofileImg"
            src={
              user?.profilePicture
                ? PF + user?.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="share"
          />
          <input
            className="shareInput"
            placeholder={`what's in your mind ${user.username}?`}
            ref={postDescription}
          />
        </div>
        <hr className="shareHr" />

        {file && (
          <div className="seeTheimageOnShare">
            <img
              className="shareImg"
              src={URL.createObjectURL(file)}
              alt=""
              srcSet=""
            />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}

        <form
          className="shareBottom"
          onSubmit={submitPost} 
          encType="multipart/form-data"
        >
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="Tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                onChange={selectImage}
                type="file"
                name=""
                id="file"
                accept=".png,.jpeg,.jpg"
                hidden
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};
