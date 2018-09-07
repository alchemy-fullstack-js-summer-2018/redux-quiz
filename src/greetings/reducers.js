export const GREETING_LOAD = 'GREETING_LOAD';

export const GREETING_CHANGE = 'GREETING_CHANGE';
export const NAME_CHANGE = 'NAME_CHANGE';

export function greetings(state = [], { type, payload }) {
  switch(type) {
    case GREETING_LOAD:
      return payload;
    
    case GREETING_CHANGE:
      return state.map(greeting => greeting === payload.greeting);
      
    case NAME_CHANGE:
      return state.filter(name => name !== payload);
    default: 
      return state;
  }

}