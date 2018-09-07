import { greeting, name } from './reducers';

describe('Greeting reducers', () => {
  it('initializes to an empty array', () => {
    const state = greeting(undefined, {});
    expect(state).toBe('hello');
  });
});

describe('Name reducers', () => {
  it('initializes to an empty array', () => {
    const state = name(undefined, {});
    expect(state).toBeNull();
  });
});