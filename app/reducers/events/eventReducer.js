import merge from 'lodash/merge'
import {
    FETCH_EVENT_REQUEST,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
    SIGNUP_FOR_EVENT_REQUEST,
    SIGNUP_FOR_EVENT_SUCCESS,
    SIGNUP_FOR_EVENT_FAILIURE,
    UNSIGNUP_FOR_EVENT_REQUEST,
    UNSIGNUP_FOR_EVENT_SUCCESS,
    UNSIGNUP_FOR_EVENT_FAILIURE,
    RESET_EVENT
    } from '../../actions/events/eventActions'


// this is a template, currently returns same state for for each action, will have
// to specify how each action modifies the app state, will also need to add
// additional state

const emptyState = { isReq: false, event: {}, error: null, success: false};

export default (state = emptyState, action) => {
    switch (action.type) {
        case FETCH_EVENT_REQUEST:
            return merge({}, state, {isReq: true});
        case FETCH_EVENT_SUCCESS:
            return merge({}, state, {isReq: false, event: action.response});
        case FETCH_EVENT_FAILURE:
            return merge({}, state, {isReq: false});
        case SIGNUP_FOR_EVENT_REQUEST:
            return merge({}, state, {isReq: true});
        case SIGNUP_FOR_EVENT_SUCCESS:
            return merge({}, state, {isReq: false, success: true});
        case SIGNUP_FOR_EVENT_FAILIURE:
            return merge({}, state, {isReq: false, error: "error signing up for event"});
        case UNSIGNUP_FOR_EVENT_REQUEST:
            return merge({}, state, {isReq: true});
        case UNSIGNUP_FOR_EVENT_SUCCESS:
            return merge({}, state, {isReq: false, success: true});
        case UNSIGNUP_FOR_EVENT_FAILIURE:
            return merge({}, state, {isReq: false, error: "error un-signing up for event"});
        case RESET_EVENT:
            return merge({}, emptyState);
        default:
            return state
    }
}
