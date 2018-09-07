import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export const changeGreeting = greeting => {
  return {
    type: GREETING_CHANGE,
    payload: greeting
  };
};

export const changeName = name => {
  return {
    type: NAME_CHANGE,
    payload: name
  };
};