import axios from "axios";

export default function blog() {
  return dispatch => {
    axios.get("http://localhost:3000/blog/posts").then(d =>
      dispatch({
        type: "GET_POSTS",
        posts: d.data,
      }),
    );
  };
}
