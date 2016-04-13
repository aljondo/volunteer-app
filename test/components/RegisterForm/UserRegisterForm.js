// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import UserRegisterForm from '../../../app/components/RegisterForm/UserRegisterForm';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('UserRegisterForm Component', () => {
    const data = {
        name: {value: null, valid: false, error: "Enter a name"},
        email: {value: null, valid: false, error: "Enter an email"},
        password: {value: null, valid: false, error: "Enter a password"},
        passwordVerify: {value: null, valid: false, error: "Verify password"},
        phone: {value: null, valid: false, error: "Enter a phone number"},
        gender: {value: null, valid: true, error: null},
        birthdate: {value: null, valid: true, error: null},
        location: {value: null, valid: true, error: null},
        education: {value: null, valid: true, error: null},
        address: {value: null, valid: true, error: null},
        city: {value: null, valid: true, error: null},
        state: {value: null, valid: true, error: null},
        zip: {value: null, valid: true, error: null},
        skills: {value: [], valid: true, error: null},
        interests: {value: [], valid: true, error: null},
        bio: {value: null, valid: true, error: null},
        mission: {value: null, valid: true, error: null},
        poc: {value: null, valid: true, error: null},
        contact: {value: true, valid: true, error: null},
    };

    function fakeMethod(){

    }

    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <UserRegisterForm handleRegister={fakeMethod.bind(this)}
                              nameChange={fakeMethod.bind(this)}
                              emailChange={fakeMethod.bind(this)}
                              userData={data}
                              passwordChange={fakeMethod.bind(this)}
                              verifyPasswordChange={fakeMethod.bind(this)}
                              phoneChange={fakeMethod.bind(this)}
                              genderChange={fakeMethod.bind(this)}
                              birthDayChange={fakeMethod.bind(this)}
                              birthMonthChange={fakeMethod.bind(this)}
                              birthYearChange={fakeMethod.bind(this)}
                              locationChange={fakeMethod.bind(this)}
                              skillsChange={fakeMethod.bind(this)}
                              interestsChange={fakeMethod.bind(this)}
                              bioChange={fakeMethod.bind(this)}
                              contactChange={fakeMethod.bind(this)}
                              errorMessage={""}/>
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});
