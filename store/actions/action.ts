import { location, coordinate, action } from '../../interface';

export const setStart = (coordinate: coordinate): action => {
  return { type: 'SET_START', coordinate };
};

// export const setGoal = () => {
//   return { type: 'SET_GOAL', payload: '' };
// };

export const setMyLocation = (myLocation: location): action => {
  return { type: 'SET_MY_LOCATION', myLocation };
};
