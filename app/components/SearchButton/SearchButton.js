import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import styles from './searchbutton.scss'

class SearchButton extends Component {
  render() {
    return (
    	<Button bsStyle="primary">Search</Button>
    );
  }
}

export default SearchButton
