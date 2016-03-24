import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux'
import api from '../middleware/api'

export default function configureStore(initialState) {
  // middleware to be used in production
  let enhancer = applyMiddleware(routerMiddleware(history), thunkMiddleware, api);

  return createStore(rootReducer, initialState, enhancer);
};
