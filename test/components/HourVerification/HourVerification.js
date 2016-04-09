// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"
import HourVerification from '../../../app/components/HourVerification/HourVerification';


describe('HourVerification Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <HourVerification event={{name: "test"}} volunteers={[<div>user 1</div>,<div>user 2</div>]}/>
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});