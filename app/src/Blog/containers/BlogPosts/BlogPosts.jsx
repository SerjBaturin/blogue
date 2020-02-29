import React from "react";
import Loader from "../../../common/Loader";
import "./style.scss";

const BlogPosts = props => {
  return (
    <div className="Blog__Posts">
      <h2>{props.head}</h2>
      {props.posts.length === 0 && <Loader />}
      <ul>
        {props.posts.map((item, i) => (
          <li key={i}>
            <h2>{item.title}</h2>
            <i>{item.author}</i>
            <p>{item.text}</p>
            <i>{item.date}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
