import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { greeting, name } from '../components/reducers';
const combined = combineReducers({
  greeting,
  name
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combined,
  composeEnhancers(
    applyMiddleware(
    )
  )
);

export default store;