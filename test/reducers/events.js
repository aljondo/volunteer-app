import { expect }  from "chai";
import reducer from '../../app/reducers/events'
import * as actions from '../../app/actions/events'

describe('Events Reducer', () => {

  let eventstate = { isReq: false,
                       events: [{id:1, name:'Reading'},
                              {id:2, name:'Gift Drive'}]}

  let unknownAction = {type:'Unknown'}

  it('returns the initial state given undefined state', () => {
    let result = reducer(undefined, {})
    expect(result).to.have.property('events')
    expect(result).to.have.property('isReq')
  })

  it('returns given state if action is no recognized', () => {
    let result = reducer(eventstate, unknownAction)
    expect(result).to.deep.equal(eventstate)
  })

  it('returns state with isReq = true if given a REQUEST action', () => {
    let req_act_1 = reducer(eventstate, {type: actions.FETCH_EVENTS_REQUEST})
    expect(req_act_1).to.have.property('isReq').to.be.true
    let req_act_2 = reducer(eventstate, {type: actions.FETCH_EVENT_REQUEST})
    expect(req_act_2).to.have.property('isReq').to.be.true
    let req_act_3 = reducer(eventstate, {type: actions.SAVE_EVENT_REQUEST})
    expect(req_act_3).to.have.property('isReq').to.be.true
  })
})
