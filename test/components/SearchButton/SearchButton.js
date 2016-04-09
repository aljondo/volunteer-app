// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('SearchButton Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <a />
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});