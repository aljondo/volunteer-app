import { REQUEST_USERS, RECEIVE_USERS} from '../actions'

export default (state = {users: []}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {})
    case RECEIVE_USERS:
      return Object.assign({}, state, {users: action.users.map(item => item.name)})
    default:
      return state
  }
}
