// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import TimeStamp from "../PostsContainer/TimeStamp";

import "./Posts.css";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes
  const [like, setLikes] = useState(false);
  const [likesNum, setLikesNum] = useState(props.post.likes);
  const [likeOrLikes, setLikeOrLikes] = useState("like");

  const [changeHeart, setChangeHeart] = useState(
    // <FontAwesomeIcon icon={faHeart} />
    "🖤"
  );

  const handleLikesUpdate = () => {
    if (!like) {
      setLikes(true);
      setLikesNum(likesNum + 1);
      setChangeHeart("❤️");
    } else if (like) {
      setLikes(false);
      setLikesNum(likesNum - 1);
      setChangeHeart("🖤");
    }
  };

  const updateLikeOrLikes = () => {
    if (likesNum > 1) {
      setLikeOrLikes("likes");
    }
  };

  window.addEventListener("load", updateLikeOrLikes);

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection
        showHeart={changeHeart}
        showLikes={likesNum}
        likeOrLikes={likeOrLikes}
        handleLikes={() => handleLikesUpdate()}
      />

      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
      <TimeStamp timestamp={props.post.timestamp} />
    </div>
  );
};

export default Post;
