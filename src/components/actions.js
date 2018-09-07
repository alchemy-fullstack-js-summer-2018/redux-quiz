import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export const changeGreeting = () => ({
  type: GREETING_CHANGE,
});

export const changeName = () => ({
  type: NAME_CHANGE,
});