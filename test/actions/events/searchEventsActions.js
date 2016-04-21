import { expect }  from "chai";
import { CALL_API, GET, POST } from '../../../app/middleware/api'
import { resetSearchEvents, fetchSearchEvents } from '../../../app/actions/events/searchEventsActions'

describe('Event Actions', () => {

    describe('fetchEvents()', () => {

        let result;
        let apiObj;

        before(() => {
            result = fetchSearchEvents();
            apiObj = result[CALL_API]
        });

        it('creates an CALL_API action', () => {
            expect(result).to.have.property(CALL_API)
        });

        it('creates action with HTTP GET Method', () => {
            expect(apiObj.method).to.equal(GET)
        });

        it('creates action with endpoint "/event"', () => {
            expect(apiObj.endpoint).to.equal('event').that.is.a('string')
        })
    });

});
