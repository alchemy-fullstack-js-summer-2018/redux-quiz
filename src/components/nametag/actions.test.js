import { changeGreeting, changeName } from './actions';
import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

describe('Greeting actions', () => {
  it('changes the greeting', () => {
    const data = 'hullo there';
    const action = changeGreeting(data);

    expect(action).toEqual({
      type: GREETING_CHANGE,
      payload: data
    });
  });
});

describe('Name actions', () => {
  it('changes the name', () => {
    const data = 'stranger';
    const action = changeName(data);

    expect(action).toEqual({
      type: NAME_CHANGE,
      payload: data
    });
  });
});