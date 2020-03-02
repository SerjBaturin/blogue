import React from "react";
import styled from "styled-components";
import { Container } from "../../../styles/styles";

const BlogMainPostWrapper = styled.div`
  h1 {
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 1em;
  }
`;

const BlogMainPostImg = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 4em;
  margin-bottom: 4em;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BlogMainPost = props => {
  const { title, img, text, author, date } = props.mainPost;
  return (
    <Container>
      <BlogMainPostWrapper>
        <BlogMainPostImg img={img} />
        <h1>{title}</h1>
        <p>{text}</p>
        <b>{author}</b>
        <span>{date}</span>
      </BlogMainPostWrapper>
    </Container>
  );
};

export default BlogMainPost;
