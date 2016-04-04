// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import HourVerification from '../../../app/components/HourVerification/HourVerification';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('HourVerification Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <HourVerification />
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});