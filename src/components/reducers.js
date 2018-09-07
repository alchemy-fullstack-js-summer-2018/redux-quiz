export const NAMETAG_CREATE = 'NAMETAG_CREATE';

export function nametags(state = [], { type, payload }) {
  switch(type) {
    case NAMETAG_CREATE:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}