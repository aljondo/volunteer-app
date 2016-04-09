import { expect }  from "chai";
import reducer from '../../../app/reducers/events/eventReducer'
import {
    FETCH_EVENT_REQUEST,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
    SAVE_EVENT_REQUEST,
    SAVE_EVENT_SUCCESS,
    SAVE_EVENT_FAILURE,
    RESET_EVENT
} from '../../../app/actions/events/eventActions'

describe('Event Reducer', () => {

    let eventState = { isReq: false, event: {id:1, name:'Reading'} };

    let unknownAction = {type:'Unknown'};

    it('returns the initial state given undefined state', () => {
        let result = reducer(undefined, {});
        expect(result).to.have.property('event');
        expect(result).to.have.property('isReq');
    });

    it('returns given state if action is no recognized', () => {
        let result = reducer(eventState, unknownAction);
        expect(result).to.deep.equal(eventState)
    });

    it('returns state with isReq = true if given a REQUEST action', () => {
        let req_act_1 = reducer(eventState, {type: FETCH_EVENT_REQUEST});
        expect(req_act_1).to.have.property('isReq').to.be.true
        let req_act_2 = reducer(eventState, {type: SAVE_EVENT_REQUEST});
        expect(req_act_2).to.have.property('isReq').to.be.true
    });

    it('returns state with isReq = false if NOT given a REQUEST action', () => {
        let req_act_1 = reducer(eventState, {type: FETCH_EVENT_SUCCESS});
        expect(req_act_1).to.have.property('isReq').to.be.false
        let req_act_2 = reducer(eventState, {type: FETCH_EVENT_FAILURE});
        expect(req_act_2).to.have.property('isReq').to.be.false
        let req_act_3 = reducer(eventState, {type: SAVE_EVENT_SUCCESS});
        expect(req_act_3).to.have.property('isReq').to.be.false
        let req_act_4 = reducer(eventState, {type: SAVE_EVENT_FAILURE});
        expect(req_act_4).to.have.property('isReq').to.be.false
        let req_act_5 = reducer(eventState, {type: RESET_EVENT});
        expect(req_act_5).to.have.property('isReq').to.be.false
    })

});
