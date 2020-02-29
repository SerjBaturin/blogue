import React from "react";
import "./style.scss";

const BlogMainPost = props => {
  const { title, img, text, author, date } = props.mainPost;
  return (
    <div className="Blog__Main__Post">
      <div
        className="Main__Post__img__wrapper"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* <img src={img} alt="main-post-image" /> */}
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
      <b>{author}</b>
      <span>{date}</span>
    </div>
  );
};

export default BlogMainPost;
