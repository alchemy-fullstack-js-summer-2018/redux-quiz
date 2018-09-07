import { createStore, combineReducers } from 'redux';
import { greeting, name } from './components/reducers';

const rootReducer = combineReducers({
  greeting,
  name
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;