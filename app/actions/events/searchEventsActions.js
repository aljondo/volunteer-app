import { CALL_API, GET, POST } from '../../middleware/api'

//action types
export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
export const RESET_SEARCH_EVENTS = 'RESET_SEARCH_EVENTS';

export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_NEIGHBORHOOD = 'SET_NEIGHBORHOOD';


export function resetSearchEvents() {
    return {
        type: RESET_SEARCH_EVENTS
    }
}

export const setCategory = (category) => {
    return ({
        type: SET_CATEGORY,
        category: {value: category, valid: true, error: null}
    })
};

export const setNeighborhood = (neighborhood) => {
    return ({
        type: SET_NEIGHBORHOOD,
        neighborhood: {value: neighborhood, valid: true, error: null}
    })
};

export function fetchSearchEvents() {
    return {
        [CALL_API]: {
            types: [ FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE ],
            endpoint: `events`,
            method: GET
        }
    }
}
