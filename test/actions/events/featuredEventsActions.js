import { expect }  from "chai";
import { CALL_API, GET, POST } from '../../../app/middleware/api'
import { resetFeaturedEvents, fetchFeaturedEvents } from '../../../app/actions/events/featuredEventsActions'

describe('Event Actions', () => {

    describe('fetchFeaturedEvents()', () => {

        let result;
        let apiObj;

        before(() => {
            result = fetchFeaturedEvents();
            apiObj = result[CALL_API]
        });

        it('creates an CALL_API action', () => {
            expect(result).to.have.property(CALL_API)
        });

        it('creates action with HTTP GET Method', () => {
            expect(apiObj.method).to.equal(GET)
        });

        it('creates action with endpoint "/featured-events"', () => {
            expect(apiObj.endpoint).to.equal('featured-events').that.is.a('string')
        })
    });

});
