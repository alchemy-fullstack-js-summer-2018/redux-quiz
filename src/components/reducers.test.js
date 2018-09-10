import {
  greeting,
  name,
  GREETING_CHANGE,
  NAME_CHANGE
} from './reducers';

describe('greeting reducer', () => {
  it('initializes greeting to Hello', () => {
    const state = greeting(undefined, {});
    expect(state).toBe('Hello');
  });

  it('changes greeting', () => {
    const payload = 'Hi';
    const state = greeting(undefined, {
      type: GREETING_CHANGE,
      payload
    });
    expect(state).toBe('Hi');
  });
});


describe('name reducer', () => {
  it('initializes name to Hello', () => {
    const state = name(undefined, {});
    expect(state).toBe('');
  });

  it('changes name', () => {
    const payload = 'Mister';
    const state = name(undefined, {
      type: NAME_CHANGE,
      payload
    });
    expect(state).toBe('Mister');
  });
});