import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BlogNavWrapper = styled.nav`
  display: flex;
  margin-left: auto;

  a {
    margin-right: 1.5em;
    color: black;

    &:hover {
      color: gray;
    }
  }
`;

const BlogNav = props => {
  return (
    <BlogNavWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/galery">Galery</NavLink>
      <NavLink to="/about">About</NavLink>
    </BlogNavWrapper>
  );
};

export default BlogNav;
