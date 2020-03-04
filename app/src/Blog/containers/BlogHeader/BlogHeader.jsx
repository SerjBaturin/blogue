import React from "react";
import BlogNav from "../BlogNav";
import Auth from "../../../Auth";
import styled from "styled-components";
import logo from "./assets/logo.svg";

const BlogHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  // background-color: rgb(240, 240, 240);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  a.logo {
    display: flex;
    align-items: center;
    margin-left: 2em;

    img {
      margin-right: 1em;
      width: 25px;
      height: auto;
    }

    span {
      font-size: 1.3em;
      font-weight: 900;
      color: #9b2e8c;
    }
  }
`;

const BlogHeader = props => {
  return (
    <BlogHeaderWrapper>
      <a className="logo" href="/">
        <img src={logo} alt="logo" />
        <span>My Blogue</span>
      </a>
      <BlogNav />
      <Auth />
    </BlogHeaderWrapper>
  );
};

export default BlogHeader;
