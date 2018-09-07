import { greeting, name, GREETING_CHANGE, NAME_CHANGE } from './reducers';

describe('Greeting reducers', () => {
  it('initializes to hello', () => {
    const state = greeting(undefined, {});
    expect(state).toBe('hello');
  });

  it('changes the greeting', () => {
    const newGreeting = 'howdy';

    const state = greeting('', {
      type: GREETING_CHANGE,
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

  it('changes the name', () => {
    const newName = 'Woody';

    const state = name('', {
      type: NAME_CHANGE,
      payload: newName
    });

    expect(state).toBe('Woody');
  });
});