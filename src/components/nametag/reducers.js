export const GREETING_ADD = 'GREETING_ADD';
export const NAME_ADD = 'NAME_ADD';

export function greeting(state = 'hello', { type, payload }) {
  switch(type) {
    case GREETING_ADD:
      return payload;
    default:
      return state;
  }
}

export function name(state = '', { type }) {
  switch(type) {
    default:
      return state;
  }
}