import { greeting, name, GREETING_ADD } from './reducers';

describe('Greeting reducers', () => {
  it('initializes to hello', () => {
    const state = greeting(undefined, {});
    expect(state).toBe('hello');
  });

  it('adds a greeting', () => {
    const newGreeting = 'howdy';
    
    const state = greeting('', {
      type: GREETING_ADD,
      payload: newGreeting
    });

    expect(state).toBe('howdy');
  });
});

describe('Name reducers', () => {
  it('initializes to an empty string', () => {
    const state = name(undefined, {});
    expect(state).toBe('');
  });
});