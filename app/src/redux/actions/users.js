import axios from "axios";

export default function users() {
  return dispatch => {
    axios.get("http://localhost:3000/admin/users/all").then(d =>
      dispatch({
        type: "GET_USERS",
        users: d.data,
      }),
    );
  };
}
