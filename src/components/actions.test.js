import { greetingChange, nameChange } from './actions';
import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

describe('actions', () => {

  it('dispatches greeting change', () => {
    const action = greetingChange('Meow');
    expect(action).toEqual({
      type: GREETING_CHANGE,
      payload: 'Meow'
    });
  });

  it('dispatches greeting change', () => {
    const action = nameChange('Bonzai');
    expect(action).toEqual({
      type: NAME_CHANGE,
      payload: 'Bonzai'
    });
  });

});