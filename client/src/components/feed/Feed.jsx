import React, { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import { Share } from "../share/Share";
import axios from "axios";
import "./feed.css";

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get("/posts/timeline/612d7ead84896c060dcf5242");
      setPosts(response.data);
      console.log(response.data)
    };
    getPost();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
