const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return { count: state.count + 1 };

    case 'REMOVE_NUMBER':
      return { count: state.count - 1 };

    case 'RESET_NUMBER':
      return { count: 0 };

    default:
      return state;
  }
};

export default reducer;
