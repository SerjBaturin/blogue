function blog(state = false, action) {
  switch (action.type) {
    case "ADMIN_REDIRECT":
      return (state = action.admin);
    default:
      return state;
  }
}

export default blog;
