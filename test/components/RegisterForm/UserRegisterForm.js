// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import UserRegisterForm from '../../../app/components/RegisterForm/UserRegisterForm';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('UserRegisterForm Component', () => {

    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <UserRegisterForm />
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});
