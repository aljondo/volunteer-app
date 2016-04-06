// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import AdvancedSearch from '../../../app/components/AdvancedSearch/AdvancedSearch';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('AdvancedSearch Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <AdvancedSearch />
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});