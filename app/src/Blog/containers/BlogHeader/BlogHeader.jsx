import React from "react";
import BlogNav from "../BlogNav";
import "./style.scss";

const BlogHeader = props => {
  return (
    <div className="BlogHeader">
      <span className="blog__header__logo">My Blog</span>
      <BlogNav />
    </div>
  );
};

export default BlogHeader;
