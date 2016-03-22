import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

// will likely deal with authentication and other state across the app

const App = ({ history, routes, store}) => {
  return (
    <Provider store={store}>
      <Router history={history} route={routes} />
    </Provider>
  )
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired
}

export default App
