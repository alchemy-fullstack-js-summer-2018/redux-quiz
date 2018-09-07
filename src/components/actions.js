import { NAMETAG_LOAD, NAMETAG_ADD, NAMETAG_UPDATE } from './reducers';
import shortid from 'shortid';

export const load = () => ({
  type: NAMETAG_LOAD,
  payload: {
    name: '',
    greeting: ''
  }
});

export const add = NAMETAG => {
  NAMETAG.key = shortid.generate();
  return {
    type: NAMETAG_ADD,
    payload: NAMETAG
  };
};

export const update = NAMETAG => ({
  type: NAMETAG_UPDATE,
  payload: NAMETAG
});

