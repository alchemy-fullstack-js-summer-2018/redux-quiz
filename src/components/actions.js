import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export const greetingUpdate = greeting => ({
  type: GREETING_CHANGE,
  payload: greeting
});

export const nameUpdate = name => ({
  type: NAME_CHANGE,
  payload: name
});