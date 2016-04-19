import merge from 'lodash/merge'
import { SET_NAME,
    SET_ADDRESS,
    SET_ZIPCODE,
    SET_MANAGER,
    SET_MONTH,
    SET_DAY,
    SET_YEAR,
    SET_CAP,
    SET_DESCRIPTION,
    SET_ERROR,
    REMOVE_ERROR,
    RESET,
    SAVE_EVENT_REQUEST,
    SAVE_EVENT_SUCCESS,
    SAVE_EVENT_FAILURE,
    SHOW_EVENT_CREATION_MODAL,
    HIDE_EVENT_CREATION_MODAL
} from '../../actions/events/eventManipulationAction'

const emptyState = {event: { name: null,
                            timecommitment: null,
                            capped: false,
                            cap: null,
                            month:null,
                            day:null,
                            year:null,
                            address: null,
                            city: null,
                            state: null,
                            zipcode: null,
                            neighborhood: null,
                            skills: [],
                            manager: null,
                            description: null },
                        error: null,
                        isSaving: false,
                        success: false,
                        isEditing: false};

export default (state = emptyState, action) => {
    switch (action.type) {
        case SET_NAME:
            return merge({}, state, {event: {name: action.name}})
        case SET_MONTH:
            return merge({}, state, {event: {month: action.month}})
        case SET_DAY:
            return merge({}, state, {event: {day: action.day}})
        case SET_YEAR:
            return merge({}, state, {event: {year: action.year}})
        case SET_ADDRESS:
            return merge({}, state, {event: {address: action.address}})
        case SET_ZIPCODE:
            return merge({}, state, {event: {zipcode: action.zipcode}})
        case SET_MANAGER:
            return merge({}, state, {event: {manager: action.manager}})
        case SET_CAP:
            return merge({}, state, {event: {cap: action.cap}})
        case SET_DESCRIPTION:
            return merge({}, state, {event: {description: action.description}})
        case SET_ERROR:
            return merge({}, state, {error: action.error})
        case REMOVE_ERROR:
            return merge({}, state, {error: null})
        case RESET:
            return merge({}, emptyState)
        case SAVE_EVENT_REQUEST:
            return merge({}, state, {isSaving: true})
        case SAVE_EVENT_SUCCESS:
            return merge({}, state, {isSaving: false, success: true})
        case SAVE_EVENT_FAILURE:
            return merge({}, state, {isSaving: false, error: "Failed to complete registration"})
        case SHOW_EVENT_CREATION_MODAL:
            console.log("We did SHOW_EVENT_CREATION_MODAL");
            return merge({}, state, {isEditing: true});
        case HIDE_EVENT_CREATION_MODAL:
            console.log("We did HIDE_EVENT_CREATION_MODAL");
            return merge({}, state, {isEditing: false});
        default:
            return state
    }
}
