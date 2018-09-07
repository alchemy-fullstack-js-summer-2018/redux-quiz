import { createStore } from 'redux';
import { greeting, name } from './components/controls/reducers';

const store = createStore(
  greeting,
  name,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;