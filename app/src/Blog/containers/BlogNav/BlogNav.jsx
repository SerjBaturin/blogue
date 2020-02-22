import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const BlogNav = props => {
  return (
    <nav className="BlogNav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/galery">Galery</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default BlogNav;
