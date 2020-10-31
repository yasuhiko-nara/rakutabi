const initialState = {
  startPoint: {
    latitude: 35.68,
    longitude: 139.76,
  },
  goalPoint: '',
  myLocation: { coords: { latitude: null, longitude: null } },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_START':
      return { ...state, startPoint: action.coordinate };
    case 'SET_MY_LOCATION':
      return { ...state, myLocation: action.myLocation };
    default:
      return { ...state };
  }
};

export default reducer;
