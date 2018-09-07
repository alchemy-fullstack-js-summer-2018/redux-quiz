import { 
  greeting,
  name,
  GREETING_CHANGE,
  NAME_CHANGE
} from './reducers';

describe('reducers', () => {
  it('inits to Hello', () => {
    const state = greeting(undefined, {});
    expect(state).toEqual('Hello');
  });
});