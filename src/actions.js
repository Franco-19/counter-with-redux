const ADD_NUMBER = 'ADD_NUMBER';
const REMOVE_NUMBER = 'REMOVE_NUMBER';
const RESET_NUMBER = 'RESET_NUMBER';

export const addValue = () => {
  return {
    type: ADD_NUMBER
  };
};

export const removeValue = () => {
  return {
    type: REMOVE_NUMBER
  };
};

export const resetValue = () => {
  return {
    type: RESET_NUMBER
  };
};
