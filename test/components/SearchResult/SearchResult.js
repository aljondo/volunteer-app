// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import SearchResult from '../../../app/components/SearchResult/SearchResult';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('SearchResult Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <SearchResult />
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});