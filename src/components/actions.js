import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export const loadGreeting = () => ({
  type: GREETING_CHANGE,
  payload: 'Greeting' // To-do
});

export const loadName = () => ({
  type: NAME_CHANGE,
  payload: 'Name' // To-do
});