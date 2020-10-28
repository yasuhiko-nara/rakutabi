const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_START':
      return { ...state, type: action.type };
    case 'SET_START':
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
