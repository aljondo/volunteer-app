import fetch from 'isomorphic-fetch'
import { CALL_API } from '../middleware/api'

//action types
export const FETCH_USERS_REQUEST = 'FETCH_EVENTS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_EVENTS_SUCCESS'
export const FETCH_USERES_FAILURE = 'FETCH_EVENTS_FAILURE'

export function fetchUsers() {
  return {
    [CALL_API]: {
      types: [ FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERES_FAILURE ],
      endpoint: `users`
    }
  }
}
