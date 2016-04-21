import merge from 'lodash/merge'
import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    RESET_SEARCH_EVENTS,
    SET_CATEGORY,
    SET_NEIGHBORHOOD,
    } from '../../actions/events/searchEventsActions'

// this is a template, currently returns same state for for each action, will have
// to specify how each action modifies the app state, will also need to add
// additional state

const emptyState = {
    isReq: false,
    category: null,
    neighborhood: null,
    events: []
};

export default (state = emptyState, action) => {
    switch (action.type) {
        case FETCH_EVENTS_REQUEST:
            return merge({}, state, {isReq: true});
        case FETCH_EVENTS_SUCCESS:
            return merge({}, state, {isReq: false, events: action.response.results});
        case FETCH_EVENTS_FAILURE:
            return merge({}, state, {isReq: false});
        case RESET_SEARCH_EVENTS:
            return merge({}, emptyState);
        case SET_CATEGORY:
            return merge({}, state, {category: action.category});
        case SET_NEIGHBORHOOD:
            return merge({}, state, {neighborhood: action.neighborhood});
        default:
            return state
    }
}
