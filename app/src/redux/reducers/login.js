const initialState = { role: "Guest" };
function login(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return { state, ...action.user };
    default:
      return state;
  }
}

export default login;
