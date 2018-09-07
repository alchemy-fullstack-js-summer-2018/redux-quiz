import { greeting } from './reducers';

describe('reducers', () => {

  it('defaults to hello', () => {
    const state = greeting('Hello', {});
    expect(state).toBe('Hello');
  });
});