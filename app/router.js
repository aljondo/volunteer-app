import React from 'react'
import { Route, IndexRoute } from 'react-router'
import IndexView from 'views/IndexView'

export default (store) => (
  <Route path='/'>
    <IndexRoute component={IndexView} />
  </Route>
)
