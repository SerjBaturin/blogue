import axios from "axios";

export default function login() {
  return dispatch => {
    axios.get("http://localhost:3000/auth/login").then(d =>
      dispatch({
        type: "GET_LOGIN",
        user: d.data,
      }),
    );
  };
}
