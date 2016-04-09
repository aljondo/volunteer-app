// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapMessage from '../../../app/components/GoogleMap/GoogleMapMessage';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('GoogleMapMessage Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <div>
            <GoogleMapMessage />
        </div>
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});
