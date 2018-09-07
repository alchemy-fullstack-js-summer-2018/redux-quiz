import { greeting, name } from './reducers';

describe('Greeting reducers', () => {
  it('initializes to hello', () => {
    const state = greeting(undefined, {});
    expect(state).toBe('hello');
  });
});

describe('Name reducers', () => {
  it('initializes to an empty string', () => {
    const state = name(undefined, {});
    expect(state).toBe('');
  });
});