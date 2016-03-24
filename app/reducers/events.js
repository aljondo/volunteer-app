import { FETCH_EVENTS_REQUEST,
         FETCH_EVENTS_SUCCESS,
         FETCH_EVENTS_FAILURE,
         FETCH_EVENT_REQUEST,
         FETCH_EVENT_SUCCESS,
         FETCH_EVENT_FAILURE,
         SAVE_EVENT_REQUEST,
         SAVE_EVENT_SUCCESS,
         SAVE_EVENT_FAILURE
       } from '../actions/events'

// this is a template, currently returns same state for for each action, will have
// to specify how each action modifies the app state, will also need to add
// addtional state

export default (state = {EVENTS: []}, action) => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return state
    case FETCH_EVENTS_SUCCESS:
      return state
    case FETCH_EVENTS_FAILURE:
      return state
    case FETCH_EVENT_REQUEST:
      return state
    case FETCH_EVENT_SUCCESS:
      return state
    case FETCH_EVENT_FAILURE:
      return state
    case SAVE_EVENT_REQUEST:
      return state
    case SAVE_EVENT_SUCCESS:
      return state
    case SAVE_EVENT_FAILURE:
      return state
    default:
      return state
  }
}
