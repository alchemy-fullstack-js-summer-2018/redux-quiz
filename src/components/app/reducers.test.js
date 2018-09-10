import {
  greetings,
  //GREETING_LOAD,
  GREETING_ADD,
  //GREETING_CHANGE
} from './greetingReducers';


describe('categories reducers', () => {

  it('adds greeting', () => {
    const greeting1 = { name: 'hello' };
    const greeting2 = { name: 'oh hello' };
    const greeting3 = { name: 'go to hell-o' };

    const state = greetings([greeting1, greeting2], {
      type: GREETING_ADD,
      payload: greeting3
    });
    expect(state).toEqual([greeting1, greeting2, greeting3]);
  });
});