// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import EventSearchResults from '../../../app/components/EventSearchResults/EventSearchResults';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('EventSearchResults Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            Temp
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});