import { GREETING_CHANGE, NAME_CHANGE } from './reducers';
import { changeGreeting, changeName } from './actions';

describe('action creators', () => {

  it('creates an actions that changes the greeting', () => {
    const greeting = 'Hello';
    const { type, payload } = changeGreeting(greeting);
    expect(type).toBe(GREETING_CHANGE);
    expect(payload).toBe(greeting);  
  });

  it('creates an actions that changes the name', () => {
    const name = 'Mariah';
    const { type, payload } = changeName(name);
    expect(type).toBe(NAME_CHANGE);
    expect(payload).toBe(name);  
  });
});