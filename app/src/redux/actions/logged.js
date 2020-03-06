import axios from "axios";

export default function logged() {
  return dispatch => {
    axios
      .get(`http://localhost:3000/auth/logged`, {
        withCredentials: true,
      })
      .then(d => {
        dispatch({ type: "GET_LOGGED", role: d.data });
      });
  };
}
