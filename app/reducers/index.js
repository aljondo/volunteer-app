import { combineReducers } from 'redux'
//move to top of the app
import { routerReducer as router } from 'react-router-redux'
import users from './users';

//combine all reducers in this folder here

export default combineReducers({
  router,
  users
})
