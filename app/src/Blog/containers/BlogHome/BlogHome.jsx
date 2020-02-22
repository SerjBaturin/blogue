import React from "react";
import { connect } from "react-redux";
import blogAction from "../../../redux/actions/blog";
import Loader from "../../../common/Loader";
import "./style.scss";

const BlogHome = props => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      props.getPosts();
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="Blog__Home">
      <h3>BLOG HOME</h3>
      {isLoading === true ? (
        <Loader />
      ) : (
        <ul>
          {props.posts.map((item, i) => (
            <li key={i}>
              <h2>{item.title}</h2>
              <i>{item.author}</i>
              <p>{item.text}</p>
              <i>{item.date}</i>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.blog,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(blogAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogHome);
