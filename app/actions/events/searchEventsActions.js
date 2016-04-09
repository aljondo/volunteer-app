import { CALL_API, GET, POST } from '../../middleware/api'

//action types
export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
export const RESET_SEARCH_EVENTS = 'RESET_SEARCH_EVENTS';


export function resetSearchEvents() {
    return {
        type: RESET_SEARCH_EVENTS
    }
}

export function fetchSearchEvents() {
    return {
        [CALL_API]: {
            types: [ FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE ],
            endpoint: `events`,
            method: GET
        }
    }
}
