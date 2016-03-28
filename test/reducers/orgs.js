import { expect }  from "chai";
import reducer from '../../app/reducers/orgs'
import * as actions from '../../app/actions/orgs'

describe('Organizations Reducer', () => {

  let orgstate = { isReq: false,
                       orgs: [{id:1, name:'Americorp'},
                              {id:2, name:'Thing'}]}

  let unknownAction = {type:'Unknown'}

  it('returns the initial state given undefined state', () => {
    let result = reducer(undefined, {})
    expect(result).to.have.property('orgs')
    expect(result).to.have.property('isReq')
  })

  it('returns given state if action is no recognized', () => {
    let result = reducer(orgstate, unknownAction)
    expect(result).to.deep.equal(orgstate)
  })

  it('returns state with isReq = true if given a REQUEST action', () => {
    let req_act_1 = reducer(orgstate, {type: actions.FETCH_ORGS_REQUEST})
    expect(req_act_1).to.have.property('isReq').to.be.true
    let req_act_2 = reducer(orgstate, {type: actions.FETCH_ORG_REQUEST})
    expect(req_act_2).to.have.property('isReq').to.be.true
    let req_act_3 = reducer(orgstate, {type: actions.SAVE_ORG_REQUEST})
    expect(req_act_3).to.have.property('isReq').to.be.true
  })
})
