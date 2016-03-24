import { FETCH_ORGS_REQUEST,
         FETCH_ORGS_SUCCESS,
         FETCH_ORGS_FAILURE,
         FETCH_ORG_REQUEST,
         FETCH_ORG_SUCCESS,
         FETCH_ORG_FAILURE,
         SAVE_ORG_REQUEST,
         SAVE_ORG_SUCCESS,
         SAVE_ORG_FAILURE
       } from '../actions/orgs'

// this is a template, currently returns same state for for each action, will have
// to specify how each action modifies the app state, will also need to add
// addtional state

export default (state = {orgs: []}, action) => {
  switch (action.type) {
    case FETCH_ORGS_REQUEST:
      return state
    case FETCH_ORGS_SUCCESS:
      return state
    case FETCH_ORGS_FAILURE:
      return state
    case FETCH_ORG_REQUEST:
      return state
    case FETCH_ORG_SUCCESS:
      return state
    case FETCH_ORG_FAILURE:
      return state
    case SAVE_ORG_REQUEST:
      return state
    case SAVE_ORG_SUCCESS:
      return state
    case SAVE_ORG_FAILURE:
      return state
    default:
      return state
  }
}
