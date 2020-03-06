const initialState = "guest";
function logged(state = initialState, action) {
  switch (action.type) {
    case "GET_LOGGED":
      return (state = action.role);
    default:
      return state;
  }
}

export default logged;
