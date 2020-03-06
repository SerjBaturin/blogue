const initialState = "Guest";
function login(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return action.user;
    default:
      return state;
  }
}

export default login;
