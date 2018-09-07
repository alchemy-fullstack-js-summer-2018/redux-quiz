import { createStore } from 'redux';
import { nametags } from './components/reducers';

const store = createStore(
  nametags,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;