function dashboard(state = 'Guest', action) {
  switch (action.type) {
    case 'GET_DASHBOARD':
      return state
    default:
      return state
  }
}

export default dashboard