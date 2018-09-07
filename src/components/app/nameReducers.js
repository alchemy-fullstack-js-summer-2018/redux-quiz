export const NAME_LOAD = 'NAME_LOAD';
export const NAME_CHANGE = 'NAME_CHANGE';
export const NAME_ADD = 'NAME_ADD';

export function names(state = [], { type, payload }) {
  switch(type) {
    case NAME_LOAD:
      return payload;
    case NAME_ADD:
      return [
        ...state,
        payload
      ];
    case NAME_CHANGE:
      return state.map(name => name.key === payload.key ? payload : name);
    
    default:
      return state;  
  }  
}