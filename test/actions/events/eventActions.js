import { expect }  from "chai";
import { CALL_API, GET, POST } from '../../../app/middleware/api'
import { fetchEvent, reset, signUpForEvent, unsignUpForEvent } from '../../../app/actions/events/eventActions'

describe('Event Actions', () => {

    describe('fetchEvent(id)', () => {

        let result;
        let apiObj;
        let id = 1;

        before(() => {
            result = fetchEvent(id);
            apiObj = result[CALL_API]
        });

        it('creates an CALL_API action', () => {
            expect(result).to.have.property(CALL_API)
        });

        it('creates action with HTTP GET Method', () => {
            expect(apiObj.method).to.equal(GET)
        });

        it('creates action with endpoint "events/id"', () => {
            expect(apiObj.endpoint).to.equal('events/1').that.is.a('string')
        })
    });

    //describe('signUpForEvent(data)', () => {
    //
    //    let result;
    //    let apiObj;
    //    let data = {eventId: 123, userId: 123};
    //
    //    before(() => {
    //        result = signUpForEvent(data);
    //        apiObj = result[CALL_API]
    //    });
    //
    //    it('creates an CALL_API action', () => {
    //        expect(result).to.have.property(CALL_API)
    //    });
    //
    //    it('creates action with HTTP POST Method', () => {
    //        expect(apiObj.method).to.equal(POST)
    //    });
    //
    //    it('creates action with endpoint "/events"', () => {
    //        expect(apiObj.endpoint).to.equal('event/signup').that.is.a('string')
    //    });
    //
    //    it('creates action with given data', () => {
    //        expect(apiObj.data).to.deep.equal(data)
    //    })
    //})
});
