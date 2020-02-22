function blog(state = [], action) {
  switch (action.type) {
    case "GET_POSTS":
      return [state, ...action.posts];
    default:
      return state;
  }
}

export default blog;
