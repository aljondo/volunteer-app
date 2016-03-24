import { FETCH_USERS_REQUEST,
         FETCH_USERS_SUCCESS,
         FETCH_USERS_FAILURE,
         FETCH_USER_REQUEST,
         FETCH_USER_SUCCESS,
         FETCH_USER_FAILURE,
         SAVE_USER_REQUEST,
         SAVE_USER_SUCCESS,
         SAVE_USER_FAILURE
       } from '../actions/users'

// this is a template, currently returns same state for for each action, will have
// to specify how each action modifies the app state, will also need to add
// addtional state

export default (state = {users: []}, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return state
    case FETCH_USERS_SUCCESS:
      // a small example of just adding an array user names to the app state
      return Object.assign({}, state, {users: action.response.map(item => item.name)})
    case FETCH_USERS_FAILURE:
      return state
    case FETCH_USER_REQUEST:
      return state
    case FETCH_USER_SUCCESS:
      return state
    case FETCH_USER_FAILURE:
      return state
    case SAVE_USER_REQUEST:
      return state
    case SAVE_USER_SUCCESS:
      return state
    case SAVE_USER_FAILURE:
      return state
    default:
      return state
  }
}
