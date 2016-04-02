// add paths from route not relative
import React from 'react';
import ReactDOM from 'react-dom';
import KeywordForm from '../../../app/components/KeywordForm/KeywordForm';
import { assert }  from "chai";
import TestUtils from "react-addons-test-utils"


describe('KeywordForm Component', () => {
    const renderedComponent = TestUtils.renderIntoDocument(
        <KeywordForm />
    );

    const dom = ReactDOM.findDOMNode(renderedComponent);


    it('it renders correctly', () => {
        return assert.isOk(renderedComponent);
    });
});
