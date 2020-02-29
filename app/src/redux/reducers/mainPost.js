function mainPost(state = {}, action) {
  switch (action.type) {
    case "GET_MAIN_POST":
      return { state, ...action.mainPost };
    default:
      return state;
  }
}

export default mainPost;
