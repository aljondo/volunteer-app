//This is the main entry point into the app.
import "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import createRoutes from 'router.js'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import App from "./containers/App"

const browserHistory = useRouterHistory(createBrowserHistory)({
  //should add to global env config
  basename:  JSON.stringify(process.env.BASENAME || '')
})

const initialState = window.__INITIAL_STATE__
const middleware = routerMiddleware(browserHistory)
// const store = middleware(createStore)(reducers, initialState)
const store = applyMiddleware(middleware)(createStore)(reducers, initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

const routes = createRoutes(store)
const rootElement = document.getElementById('mount')

ReactDOM.render(
  <App history={history} routes={routes} store={store} />,
  rootElement
)
