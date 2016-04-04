// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import HomeBlurb from '../../../app/components/HomeBlurb/HomeBlurb';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('HomeBlurb Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <HomeBlurb />
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});