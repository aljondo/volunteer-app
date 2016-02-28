import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import { routerMiddleware } from 'react-router-redux'

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

export default function configureStore(initialState = {}, history) {

  let enhancer = compose(
    applyMiddleware(routerMiddleware(history)),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument(),
    // wire ?debug_session=<key> in address bar to persist debug sessions
    persistState(getDebugSessionKey())
  );

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
