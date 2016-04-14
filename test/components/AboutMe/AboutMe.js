// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from '../../../app/components/ProfileComponents/Volunteer/AboutMe';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('AboutMe Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <AboutMe />
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});