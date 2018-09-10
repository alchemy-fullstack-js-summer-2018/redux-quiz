import { NAME_CHANGE, GREETING_CHANGE } from './reducers';
import { updateName, updateGreeting } from './actions';

describe('actions', () => {
  it('updates name', () => {
    const payload = {};
    const action = {
      type: NAME_CHANGE,
      payload
    };
    expect(updateName(payload).type).toEqual(action.type);
  });

  it('updates greeting', () => {
    const payload = {};
    const action = {
      type: GREETING_CHANGE,
      payload
    };
    expect(updateGreeting(payload).type).toEqual(action.type);
  });
});