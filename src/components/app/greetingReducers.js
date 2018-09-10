export const GREETING_LOAD = 'GREETING_LOAD';
export const GREETING_CHANGE = 'GREETING_CHANGE';
export const GREETING_ADD = 'GREETING_ADD';


export function greetings(state = [], { type, payload }) {
  switch(type) {
    case GREETING_LOAD:
      return payload;

    case GREETING_ADD:
      return [
        ...state,
        payload
      ];

    case GREETING_CHANGE:
      return state.map(greeting => greeting.key === payload.key ? payload : greeting);
    
    default:
      return state;  
  }  
}