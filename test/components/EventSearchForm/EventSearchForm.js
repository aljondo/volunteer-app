// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import EventSearchForm from '../../../app/components/EventSearchForm/EventSearchForm';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('EventSearchForm Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <EventSearchForm />
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});