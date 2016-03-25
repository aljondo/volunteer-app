import fetch from 'isomorphic-fetch'
import { CALL_API, GET, POST } from '../middleware/api'

//action types
export const FETCH_ORGS_REQUEST = 'FETCH_ORGS_REQUEST'
export const FETCH_ORGS_SUCCESS = 'FETCH_ORGS_SUCCESS'
export const FETCH_ORGS_FAILURE = 'FETCH_ORGS_FAILURE'

export const FETCH_ORG_REQUEST = 'FETCH_ORGS_REQUEST'
export const FETCH_ORG_SUCCESS = 'FETCH_ORGS_SUCCESS'
export const FETCH_ORG_FAILURE = 'FETCH_ORGS_FAILURE'

export const SAVE_ORG_REQUEST = 'FETCH_ORGS_REQUEST'
export const SAVE_ORG_SUCCESS = 'FETCH_ORGS_SUCCESS'
export const SAVE_ORG_FAILURE = 'FETCH_ORGS_FAILURE'

export function fetchOrgs() {
  return {
    [CALL_API]: {
      types: [ FETCH_ORGS_REQUEST, FETCH_ORGS_SUCCESS, FETCH_ORGS_FAILURE ],
      endpoint: `ORGS`,
      method: GET
    }
  }
}

export function fetchOrg(id) {
  return {
    [CALL_API]: {
      types: [ FETCH_ORG_REQUEST, FETCH_ORG_SUCCESS, FETCH_ORG_FAILURE ],
      endpoint: `ORGS/${id}`,
      method: GET
    }
  }
}

// must save ORG in local state and then post to backend
export function saveOrg(data) {
  return {
    [CALL_API]: {
      types: [ SAVE_ORG_REQUEST, SAVE_ORG_SUCCESS, SAVE_ORG_FAILURE ],
      endpoint: `ORGS`,
      method: POST,
      data: data
    }
  }
}
