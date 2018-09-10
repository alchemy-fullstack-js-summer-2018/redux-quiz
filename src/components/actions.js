import { NAMETAG_CREATE } from './reducers';

export const add = nametag => {
  nametag.greeting = 'Hello';
  return {
    type: NAMETAG_CREATE,
    payload: nametag
  };
};