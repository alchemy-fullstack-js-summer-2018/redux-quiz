import { GREETING_LOAD, GREETING_CHANGE } from './reducers';
import data from './greetings-data';

export const load = () => ({
  type: GREETING_LOAD,
  payload: data
});

export const update = greeting => ({
  type: GREETING_CHANGE,
  payload: greeting
});

