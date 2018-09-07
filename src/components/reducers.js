export const NAMETAG_LOAD = 'NAMETAG_LOAD';
export const NAMETAG_ADD = 'NAMETAG_ADD';
export const NAMETAG_UPDATE = 'NAMETAG_UPDATE';

export function nametag(state = [], { greeting, payload }) {
  switch(type) {
    case NAMETAG_LOAD:
      return payload;
    case NAMETAG_ADD:
      return [
        ...state,
        payload
      ];
    case NAMETAG_UPDATE:
      return state.map(nametag => nametag.key === payload.key ? payload : nametag);
    default:
      return state;
  }
}