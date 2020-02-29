import axios from "axios";

export default function blog() {
  return dispatch => {
    axios.get("http://localhost:3000/blog/main-post").then(d =>
      dispatch({
        type: "GET_MAIN_POST",
        mainPost: d.data,
      }),
    );
  };
}
