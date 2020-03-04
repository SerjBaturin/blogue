function getAdmin(state = { name: "" }, action) {
  switch (action.type) {
    case "GET_ADMIN":
      const newState = action.admin;
      return newState;
    default:
      return state;
  }
}

export default getAdmin;
