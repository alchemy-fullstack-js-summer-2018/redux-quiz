import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export const changeGreeting = () => ({
  type: GREETING_CHANGE,
  payload: 'Greeting' // To-do
});

export const changeName = () => ({
  type: NAME_CHANGE,
  payload: 'Name' // To-do
});