import { expect }  from "chai";
import * as actions from '../../app/actions/registration'
import { CALL_API, GET, POST } from '../../app/middleware/api'

describe('Registration Actions', () => {

  describe('setEmail', () => {
    it('create an action set an email address', () => {
      const email = 'what@up.com'
      const expectedAction = {
        type: actions.SET_EMAIL,
        email: {value: email, valid: true, error: null}
      };
      expect(actions.setEmail(email)).to.deep.equal(expectedAction)
    })
  });

  describe('setPassword', () => {
    it('create an action set a password', () => {
      const password = 'words';
      const expectedAction = {
        type: actions.SET_PASSWORD,
        password: {value: password, valid: true, error: null}
      };
      expect(actions.setPassword(password)).to.deep.equal(expectedAction)
    })
  });

  describe('setPasswordVerify', () => {
    it('create an action set a password verify', () => {
      const passwordVerify = 'words';
      const expectedAction = {
        type: actions.SET_PASSWORDVERIFY,
        passwordVerify: {value: passwordVerify, valid: true, error: null}
      };
      expect(actions.setPasswordVerify(passwordVerify, "words")).to.deep.equal(expectedAction)
    })
  });

  describe('setError', () => {
    it('create an action set an error', () => {
      const error = 'Failed';
      const expectedAction = {
        type: actions.SET_ERROR,
        error
      };
      expect(actions.setError(error)).to.deep.equal(expectedAction)
    })
  });

  describe('saveUser(data)', () => {

    let result;
    let apiObj;
    let data = {
      name: {value: "Joe Smith", valid: true, error: "Enter a name"},
      email: {value: "joe@test.com", valid: true, error: "Enter an email"},
      password: {value: "password", valid: true, error: "Enter a password"},
      passwordVerify: {value: "password", valid: true, error: "Verify password"},
      phone: {value: "5555555555", valid: true, error: "Enter a phone number"},
      gender: {value: "male", valid: true, error: null},
      birthdate: {value: "1/12/1994", valid: true, error: null},
      location: {value: "missionhill", valid: true, error: null},
      education: {value: "highschool", valid: true, error: null},
      address: {value: null, valid: true, error: null},
      city: {value: null, valid: true, error: null},
      state: {value: null, valid: true, error: null},
      zip: {value: null, valid: true, error: null},
      skills: {value: ["sports"], valid: true, error: null},
      interests: {value: ["health"], valid: true, error: null},
      bio: {value: "My bio", valid: true, error: null},
      mission: {value: null, valid: true, error: null},
      contact: {value: true, valid: true, error: null},
    };

    let resultUser = {
      name: "Joe Smith",
      email: "joe@test.com",
      passwordhash: "password",
      phone: "5555555555",
      gender: "male",
      permissions: "volunteer",
      birthdate: "1/12/1994",
      education: "highschool",
      neighborhoods: ["missionhill"],
      skills: ["sports"],
      interests: ["health"],
      bio: "My bio",
      contact: true,
      master: false
    };
    before(() => {
      result = actions.saveUser(data, 'volunteer');
      apiObj = result[CALL_API]
    })

    it('creates an CALL_API action', () => {
      expect(result).to.have.property(CALL_API)
    })

    it('creates action with HTTP POST Method', () => {
      expect(apiObj.method).to.equal(POST)
    })

    it('creates action with endpoint "/users"', () => {
      expect(apiObj.endpoint).to.equal('users').that.is.a('string')
    })

    it('creates action with given data', () => {
      expect(apiObj.data).to.deep.equal(resultUser)
    })
  })
})
