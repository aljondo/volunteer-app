import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux'

export default function configureStore(initialState) {
  // middleware to be used in production
  let enhancer = applyMiddleware(routerMiddleware(history));

  return createStore(rootReducer, initialState, enhancer);
};
