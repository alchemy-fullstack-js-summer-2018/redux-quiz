export const GREETING_LOAD = 'GREETING_LOAD';
export const GREETING_ADD = 'GREETING_ADD';
export const NAME_LOAD = 'NAME_LOAD';
export const NAME_ADD = 'NAME_ADD';

export function greeting(state = 'hello', { type }) {
  switch(type) {
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