// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import OrgRegisterForm from '../../../app/components/RegisterForm/OrgRegisterForm';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('OrgRegisterForm Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <OrgRegisterForm />
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});