import React from "react";
import BlogMainPost from "../BlogMainPost";

const BlogHome = props => {
  return (
    <div className="Blog__Home">
      <BlogMainPost mainPost={props.mainPost} />
    </div>
  );
};

export default BlogHome;
