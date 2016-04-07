import React, { Component } from 'react';
import {Input} from 'react-bootstrap'

class KeywordForm extends Component {
  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
  }

  render() {
    return (
      <Input
     	className="input-sm"
        type="text"
        placeholder="Enter keywords"
        label="Interests"
        ref="input"
        onChange={this.handleChange} />
    );
  }
}

export default KeywordForm
