import React, { useEffect } from "react";
import BlogHeader from "./containers/BlogHeader";
import BlogHome from "./containers/BlogHome";
import { connect } from "react-redux";
import blogAction from "../redux/actions/blog";
import mainPostAction from "../redux/actions/mainPost";
import BlogNews from "./containers/BlogNews";
import BlogPosts from "./containers/BlogPosts";
import BlogGalery from "./containers/BlogGalery";
import BlogAbout from "./containers/BlogAbout";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import { Route } from "react-router-dom";
import "./style.scss";

const Blog = props => {
  useEffect(() => {
    props.getPosts();
    props.getMainPost();
  }, []);
  return (
    <div className="Blog">
      <BlogHeader />
      <Route
        exact
        path="/"
        render={() => <BlogHome mainPost={props.mainPost} />}
      />
      <Route path="/news" component={BlogNews} />
      <Route
        path="/posts"
        render={() => <BlogPosts posts={props.posts} head="All posts" />}
      />
      <Route path="/galery" component={BlogGalery} />
      <Route path="/about" component={BlogAbout} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.blog,
    mainPost: state.mainPost,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(blogAction()),
    getMainPost: () => dispatch(mainPostAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
