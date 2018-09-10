import { 
  greeting,
  name,
  GREETING_CHANGE,
  NAME_CHANGE
} from './reducers';

describe('reducers', () => {
  it('inits greeting to Hello', () => {
    const state = greeting(undefined, {});
    expect(state).toEqual('Hello');
  });

  it('inits name to empty string', () => {
    const state = name(undefined, {});
    expect(state).toEqual('');
  });

  it('it changes greeting', () => {
    const state = greeting('', {
      type: GREETING_CHANGE,
      payload: 'Greetings'
    });
    expect(state).toEqual('Greetings');
  });

  it('changes name', () => {
    const state = name('Robyn', {
      type: NAME_CHANGE,
      payload: 'Hood'
    });
    expect(state).toEqual('Hood');
  });
});