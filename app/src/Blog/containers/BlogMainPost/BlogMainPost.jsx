import React from "react";
import styled from "styled-components";
import { Container } from "../../../styles/styles";

const BlogMainPostWrapper = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    height: 400px;
    margin-top: 4em;
    margin-bottom: 4em;
  }

  h1 {
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 1em;
  }
`;

const BlogMainPost = props => {
  const { title, img, text, author, date } = props.mainPost;
  return (
    <Container>
      <BlogMainPostWrapper>
        <img src={img} alt="main post image" />
        <h1>{title}</h1>
        <p>{text}</p>
        <b>{author}</b>
        <span>{date}</span>
      </BlogMainPostWrapper>
    </Container>
  );
};

export default BlogMainPost;
