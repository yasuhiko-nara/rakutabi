export const setStart = (coordinate) => {
  return { type: 'SET_START', coordinate };
};

export const setGoal = () => {
  return { type: 'SET_GOAL', payload: '' };
};

export const setMyLocation = (myLocation) => {
  return { type: 'SET_MY_LOCATION', myLocation };
};
