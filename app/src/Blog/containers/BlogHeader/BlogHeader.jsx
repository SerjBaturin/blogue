import React from "react";
import BlogNav from "../BlogNav";
import Auth from "../../../Auth";
import "./style.scss";

const BlogHeader = props => {
  return (
    <div className="Blog__Header">
      <span className="Blog__Header__Logo">My Blog</span>
      <BlogNav />
      <Auth />
    </div>
  );
};

export default BlogHeader;
