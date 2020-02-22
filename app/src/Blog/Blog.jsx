import React from "react";
import BlogHeader from "./containers/BlogHeader";
import BlogHome from "./containers/BlogHome";
import BlogNews from "./containers/BlogNews";
import BlogPosts from "./containers/BlogPosts";
import BlogGalery from "./containers/BlogGalery";
import BlogAbout from "./containers/BlogAbout";
import { Route } from "react-router-dom";
import "./style.scss";

const Blog = () => {
  return (
    <div className="Blog">
      <BlogHeader />
      <Route exact path="/" component={BlogHome} />
      <Route path="/news" component={BlogNews} />
      <Route path="/posts" component={BlogPosts} />
      <Route path="/galery" component={BlogGalery} />
      <Route path="/about" component={BlogAbout} />
    </div>
  );
};

export default Blog;
