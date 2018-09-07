import { createStore, combineReducers } from 'redux';
import { greeting, name } from './src/components/categories/categoriesReducers';
const combined = combineReducers({
  greeting,
  name
});

const store = createStore(
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;