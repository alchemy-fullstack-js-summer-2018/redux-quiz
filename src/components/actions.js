import {
  GREETING_CHANGE,
  NAME_CHANGE
} from './reducers';

export const updateGreeting = greeting => {
  return {
    type: GREETING_CHANGE,
    payload: { ...greeting }
  };
};

export const updateName = name => {
  return {
    type: NAME_CHANGE,
    payload: { ...name }
  };
};