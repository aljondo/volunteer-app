import { expect }  from "chai";
import reducer from '../../../app/reducers/events/featuredEventsReducer'
import {
    FETCH_FEATURED_EVENTS_REQUEST,
    FETCH_FEATURED_EVENTS_SUCCESS,
    FETCH_FEATURED_EVENTS_FAILURE,
    RESET_FEATURED_EVENTS
} from '../../../app/actions/events/featuredEventsActions'

describe('featuredEvent Reducer', () => {

    let eventState = {
            isReq: false,
            events: [
                {id:1, name:'Reading'},
                {id:2, name:'Gift Drive'}
            ]
        };

    let unknownAction = {type:'Unknown'};

    it('returns the initial state given undefined state', () => {
        let result = reducer(undefined, {});
        expect(result).to.have.property('events');
        expect(result).to.have.property('isReq');
    });

    it('returns given state if action is no recognized', () => {
        let result = reducer(eventState, unknownAction);
        expect(result).to.deep.equal(eventState)
    });

    it('returns state with isReq = true if given a REQUEST action', () => {
        let req_act_1 = reducer(eventState, {type: FETCH_FEATURED_EVENTS_REQUEST});
        expect(req_act_1).to.have.property('isReq').to.be.true
    });

    it('returns state with isReq = false if NOT given a REQUEST action', () => {
        {/**let req_act_1 = reducer(eventState, {type: FETCH_FEATURED_EVENTS_SUCCESS});
        expect(req_act_1).to.have.property('isReq').to.be.false*/}
        let req_act_2 = reducer(eventState, {type: FETCH_FEATURED_EVENTS_FAILURE});
        expect(req_act_2).to.have.property('isReq').to.be.false
        let req_act_3 = reducer(eventState, {type: RESET_FEATURED_EVENTS});
        expect(req_act_3).to.have.property('isReq').to.be.false
    })

});
