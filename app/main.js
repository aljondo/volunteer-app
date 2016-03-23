//This is the main entry point into the app.
import "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from 'router.js'
import { createStore, applyMiddleware } from 'redux'
import App from "./containers/App"
import configureStore from './store/configureStore'

const browserHistory = useRouterHistory(createBrowserHistory)()

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

const rootElement = document.getElementById('mount')

ReactDOM.render(
  <App history={history} routes={routes} store={store} />,
  rootElement
)
