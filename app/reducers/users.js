import { FETCH_USERS_REQUEST,
         FETCH_USERS_SUCCESS,
         FETCH_USERES_FAILURE } from '../actions/users'

// add failure error handling case
// add request state, for example so a loading ui event can be shown

export default (state = {users: []}, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return Object.assign({}, state, {})
    case FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {users: action.response.map(item => item.name)})
    default:
      return state
  }
}
