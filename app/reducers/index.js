import { combineReducers } from 'redux'
//move to top of the app
import { routerReducer as router } from 'react-router-redux'
import users from './users'
import event from './events/eventReducer'
import searchEvents from './events/searchEventsReducer'
import featuredEvents from './events/featuredEventsReducer'
import orgs from './orgs'
import registration from './registration'
import auth from './auth'
import eventcreation from './events/eventManipulationReducer'

//add an error reducer as well with actions ADD_ERROR, REMOVE_ERROR

//combine all reducers in this folder here
export default combineReducers({
  router,
  users,
  event,
  searchEvents,
  featuredEvents,
  orgs,
  registration,
  auth,
  eventcreation
})
