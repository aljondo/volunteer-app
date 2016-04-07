import merge from 'lodash/merge'
import {
    FETCH_FEATURED_EVENTS_REQUEST,
    FETCH_FEATURED_EVENTS_SUCCESS,
    FETCH_FEATURED_EVENTS_FAILURE,
    RESET_FEATURED_EVENTS
    } from '../../actions/events/featuredEventsActions'

// this is a template, currently returns same state for for each action, will have
// to specify how each action modifies the app state, will also need to add
// additional state

const emptyState = { isReq: false, events: []};

export default (state = emptyState, action) => {
    switch (action.type) {
        case FETCH_FEATURED_EVENTS_REQUEST:
            return merge({}, state, {isReq: true});
        case FETCH_FEATURED_EVENTS_SUCCESS:
            return merge({}, state, {isReq: false, events: action.response});
        case FETCH_FEATURED_EVENTS_FAILURE:
            return merge({}, state, {isReq: false});
        case RESET_FEATURED_EVENTS:
            return merge({}, emptyState);
        default:
            return state
    }
}
