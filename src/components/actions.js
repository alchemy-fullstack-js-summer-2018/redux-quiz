import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export const changeGreeting = greeting => ({
  type: GREETING_CHANGE,
  payload: greeting
});

export const changeName = name => ({
  type: NAME_CHANGE,
  payload: name
});