export const GREETING_CHANGE = 'GREETING_CHANGE';
export const NAME_CHANGE = 'NAME_CHANGE';

export const getGreeting = state => state.greeting;
export const getName = state => state.Name;

export function greeting(state = 'Hello', { type, payload }) {
  if(type === GREETING_CHANGE) return payload;
  else return state;
}

export function name(state = '', { type, payload }) {
  if(type === NAME_CHANGE) return payload;
  else return state;
}