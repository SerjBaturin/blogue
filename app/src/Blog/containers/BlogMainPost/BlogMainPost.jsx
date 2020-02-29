import React from "react";
import "./style.scss";

const BlogMainPost = props => {
  return (
    <div className="Blog__Main_Post">
      <h1>{props.mainPost.title}</h1>
      <p>{props.mainPost.text}</p>
    </div>
  );
};

export default BlogMainPost;
