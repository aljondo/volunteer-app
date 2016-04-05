// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import RegisterSwitch from '../../../app/components/RegisterForm/RegisterSwitch';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('RegisterSwitch Component', () => {

    function fakeMethod(){
        // IDK why this fixes it, but oh well
    }

    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <RegisterSwitch onSelection={fakeMethod}/>
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});