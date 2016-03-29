import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import styles from './searchbutton.scss'

// CLPrompt stands for Category Location Prompt. the dropdowns dont really work
class SearchButton extends Component {
  render() {
    return (
    	<Button bsStyle="primary">Search</Button>
    );
  }
}

export default SearchButton
