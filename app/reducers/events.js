import merge from 'lodash/merge'
import { FETCH_FEATURED_EVENTS_REQUEST,
         FETCH_FEATURED_EVENTS_SUCCESS,
         FETCH_FEATURED_EVENTS_FAILURE,
         FETCH_EVENT_REQUEST,
         FETCH_EVENT_SUCCESS,
         FETCH_EVENT_FAILURE,
         SAVE_EVENT_REQUEST,
         SAVE_EVENT_SUCCESS,
         SAVE_EVENT_FAILURE
       } from '../actions/events'

// this is a template, currently returns same state for for each action, will have
// to specify how each action modifies the app state, will also need to add
// additional state

const emptyState = { isReq: false,
                     event: {},
                     featuredEvents: []}

export default (state = emptyState, action) => {
  switch (action.type) {
    case FETCH_FEATURED_EVENTS_REQUEST:
      return merge({}, state, {isReq: true})
    case FETCH_FEATURED_EVENTS_SUCCESS:
      return merge({}, state, {isReq: false, featuredEvents: action.response})
    case FETCH_FEATURED_EVENTS_FAILURE:
      return merge({}, state, {isReq: false})
    case FETCH_EVENT_REQUEST:
      return merge({}, state, {isReq: true})
    case FETCH_EVENT_SUCCESS:
      return merge({}, state, {isReq: false, event: action.response})
    case FETCH_EVENT_FAILURE:
      return merge({}, state, {isReq: false})
    case SAVE_EVENT_REQUEST:
      return merge({}, state, {isReq: true})
    case SAVE_EVENT_SUCCESS:
      return merge({}, state, {isReq: false})
    case SAVE_EVENT_FAILURE:
      return merge({}, state, {isReq: false})
    default:
      return state
  }
}
