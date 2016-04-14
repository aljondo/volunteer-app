// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import EditingPopup from '../../../app/components/ProfileComponents/Volunteer/EditingPopup';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('EditingPopup Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <EditingPopup />
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});