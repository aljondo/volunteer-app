import fetch from 'isomorphic-fetch'

//action types
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

//move to dev enviroment and set production in env vars
const baseUrl = 'http://localhost:3004';

// action creators
export function requestUsers() {
  return { type: REQUEST_USERS}
}

function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    users: json
  }
}

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers())
    return fetch(`${baseUrl}/users`)
      .then(req => req.json())
      .then(json => dispatch(receiveUsers(json)))
  }
}
