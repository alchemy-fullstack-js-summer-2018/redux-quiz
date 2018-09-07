import { 
  nametags,
  NAMETAG_CREATE 
} from './reducers';

describe('nametag reducers', () => {
  const state = nametags(undefined, {});
  expect(state).toEqual([]);
});

it('creates a nametag', () => {
  const nametag1 = {
    greeting: 'How Ya Doin\'',
    name: 'Mark'
  };

  const state = nametags(nametag1, {
    type: NAMETAG_CREATE,
    payload: nametag1
  });

  expect(state).toEqual(nametag1);
});