import { GREETING_CHANGE } from './reducers';
import { changeGreeting } from './actions';

describe('action creators', () => {

  it('creates an actions that changes the greeting', () => {
    const greeting = 'Hello';
    const { type, payload } = changeGreeting(greeting);
    expect(type).toBe(GREETING_CHANGE);
    expect(payload).toBe(greeting);  
  });
});