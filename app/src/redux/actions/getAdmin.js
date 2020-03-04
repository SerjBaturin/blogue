import axios from "axios";

export default function getAdmin(name) {
  return dispatch => {
    axios.get(`http://localhost:3000/admin/users/${name}`).then(d =>
      dispatch({
        type: "GET_ADMIN",
        admin: d.data,
      }),
    );
  };
}
