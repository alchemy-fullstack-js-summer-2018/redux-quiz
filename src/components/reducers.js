
export const GREETING_CHANGE = 'GREETING_CHANGE';

export function greeting(state = 'Hello', { type, payload }) {
  switch(type) {
    case GREETING_CHANGE:
      return payload;
    default: 
      return state;
  }
}