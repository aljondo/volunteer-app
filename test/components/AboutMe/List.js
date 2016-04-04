// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import List from '../../../app/components/AboutMe/List';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('List Component', () => {

    const renderedComponent = TestUtils.renderIntoDocument(
        <List members={[]} />
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});