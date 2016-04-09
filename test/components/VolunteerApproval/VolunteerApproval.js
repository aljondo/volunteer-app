// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"
import VolunteerApproval from '../../../app/components/VolunteerApproval/VolunteerApproval';


describe('VolunteerApproval Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <VolunteerApproval event={{name: "test"}} volunteers={[<div>user 1</div>,<div>user 2</div>]}/>
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});