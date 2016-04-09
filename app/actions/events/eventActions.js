import { CALL_API, GET, POST } from '../../middleware/api'

//action types
export const FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE';

export const SAVE_EVENT_REQUEST = 'FETCH_EVENTS_REQUEST';
export const SAVE_EVENT_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const SAVE_EVENT_FAILURE = 'FETCH_EVENTS_FAILURE';

export const RESET_EVENT = 'RESET_EVENT';

export function reset() {
    return {
        type: RESET_EVENT
    }
}

export function fetchEvent(id) {
    return {
        [CALL_API]: {
            types: [ FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE ],
            endpoint: `events/${id}`,
            method: GET
        }
    }
}

// must save event in local state and then post to backend
export function saveEvent(data) {
    return {
        [CALL_API]: {
            types: [ SAVE_EVENT_REQUEST, SAVE_EVENT_SUCCESS, SAVE_EVENT_FAILURE ],
            endpoint: `events`,
            method: POST,
            data: data
        }
    }
}
