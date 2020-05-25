// You will add code to this file
import React, {useState} from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments

  const [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState(
    (props.comments.username = ""),
    (props.comments.text = "")
  );

  return (
    <div>
      {/* map through the comments data and return the Comment component */}

      {comments.map((data, index) => {
        return <Comment key={index} comment={data} />;
      })}

      <CommentInput
        comment={newComment}
        changeComment={(e) => setNewComment(e.target.value)}
      />
    </div>
  );
};

export default CommentSection;
