import merge from 'lodash/merge'
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
const emptyState = { isReq: false,
                      orgs: [],
                     organization: {}}

export default (state = emptyState, action) => {
  switch (action.type) {
    case FETCH_ORGS_REQUEST:
      return merge({}, state, {isReq: true})
    case FETCH_ORGS_SUCCESS:
      return merge({}, state, {isReq: false, orgs: action.response})
    case FETCH_ORGS_FAILURE:
      return merge({}, state, {isReq: false})
    case FETCH_ORG_REQUEST:
      return merge({}, state, {isReq: true})
    case FETCH_ORG_SUCCESS:
      return merge({}, state, {isReq: false, organization: action.response})
    case FETCH_ORG_FAILURE:
      return merge({}, state, {isReq: false})
    case SAVE_ORG_REQUEST:
      return merge({}, state, {isReq: true})
    case SAVE_ORG_SUCCESS:
      return merge({}, state, {isReq: false})
    case SAVE_ORG_FAILURE:
      return merge({}, state, {isReq: false})
    default:
      return state
  }
}
