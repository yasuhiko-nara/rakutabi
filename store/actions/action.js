export const setStart = ({ payload }) => {
  return { type: 'SET_START', payload };
};

export const setGoal = () => {
  return { type: 'SET_GOAL', payload: '' };
};
