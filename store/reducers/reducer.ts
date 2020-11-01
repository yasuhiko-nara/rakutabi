import { state, action } from '../../interface';

const initialState: state = {
  startPoint: { latitude: null, longitude: null },
  goalPoint: { latitude: null, longitude: null },
  myLocation: { coords: { latitude: null, longitude: null } },
};

const reducer = (state: state = initialState, action: action): state => {
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
