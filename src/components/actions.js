import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export const greetingChange = payload => ({
  type: GREETING_CHANGE,
  payload
});

export const nameChange = payload => ({
  type: NAME_CHANGE,
  payload
});