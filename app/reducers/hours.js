import merge from 'lodash/merge'
import {
    SET_START_TIME,
    SET_END_TIME,
    LOG_HOURS_REQUEST,
    LOG_HOURS_SUCCESS,
    LOG_HOURS_FAILURE

} from '../actions/hours'

const emptyState = { isReq: false,
    start: {value: null, valid: true, error: "Enter a start time"},
    end: {value: null, valid: true, error: "Enter a start time."},
    error: null,
    success: false
    };

export default (state = emptyState, action) => {
    switch (action.type) {
        case SET_START_TIME:
            return merge({}, state, {start: action.start.value});
        case SET_END_TIME:
            return merge({}, state, {end: action.end.value});
        case LOG_HOURS_REQUEST:
            return merge({}, state, {isReq: true});
        case LOG_HOURS_SUCCESS:
            return merge({}, state, {isReq: false, error: null, success: true});
        case LOG_HOURS_FAILURE:
            return merge({}, state, {isReq: false, error: "Failed to log hours.", success: false});
        default:
            return state
    }
}
