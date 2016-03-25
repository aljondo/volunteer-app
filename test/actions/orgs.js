import { expect }  from "chai";
import * as actions from '../../app/actions/orgs'
import { CALL_API, GET, POST } from '../../app/middleware/api'

describe('Organizations Actions', () => {

  describe('fetchOrgs()', () => {

    let result
    let apiObj

    before(() => {
      result = actions.fetchOrgs()
      apiObj = result[CALL_API]
    })

    it('creates an CALL_API action', () => {
      expect(result).to.have.property(CALL_API)
    })

    it('creates action with HTTP GET Method', () => {
      expect(apiObj.method).to.equal(GET)
    })

    it('creates action with endpoint "orgs"', () => {
      expect(apiObj.endpoint).to.equal('orgs').that.is.a('string')
    })
  })

  describe('fetchOrg(id)', () => {

    let result
    let apiObj
    let id = 1

    before(() => {
      result = actions.fetchOrg(id)
      apiObj = result[CALL_API]
    })

    it('creates an CALL_API action', () => {
      expect(result).to.have.property(CALL_API)
    })

    it('creates action with HTTP GET Method', () => {
      expect(apiObj.method).to.equal(GET)
    })

    it('creates action with endpoint "orgs/id"', () => {
      expect(apiObj.endpoint).to.equal('orgs/1').that.is.a('string')
    })
  })

  describe('saveOrg(data)', () => {

    let result
    let apiObj
    let data = {id: 1, name: "Americorp"}

    before(() => {
      result = actions.saveOrg(data)
      apiObj = result[CALL_API]
    })

    it('creates an CALL_API action', () => {
      expect(result).to.have.property(CALL_API)
    })

    it('creates action with HTTP POST Method', () => {
      expect(apiObj.method).to.equal(POST)
    })

    it('creates action with endpoint "/orgs"', () => {
      expect(apiObj.endpoint).to.equal('orgs').that.is.a('string')
    })

    it('creates action with given data', () => {
      expect(apiObj.data).to.deep.equal(data)
    })
  })
})
