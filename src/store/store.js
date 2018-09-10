import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { names } from '../components/app/nameReducers';
import { greetings } from '../components/app/greetingReducers';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/app/reducers';


const combined = combineReducers({ 
  names, 
  greetings,
  error,
  loading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combined,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware
    )
  )
);

export default store;