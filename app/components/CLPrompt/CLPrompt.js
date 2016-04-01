import React, { Component } from 'react';
import {Button, ButtonGroup, MenuItem, DropdownButton, Col} from 'react-bootstrap'
import styles from './clprompt.scss'

// CLPrompt stands for Category Location Prompt. the dropdowns dont really work
class CLPrompt extends Component {
  render() {
    return (
    	<div>
	    	<h3>I am looking for 
	 	      <ButtonGroup className={styles.dropdown}>
			    <DropdownButton title="Category" id="bg-nested-dropdown">
			      <MenuItem eventKey="1">Cleaning</MenuItem>
			      <MenuItem eventKey="2">Pet stuff</MenuItem>
			      <MenuItem eventKey="3">Tutoring</MenuItem>
			      <MenuItem eventKey="4">Building</MenuItem>
			    </DropdownButton>
			  </ButtonGroup>
	 	  in 
	 	 	  <ButtonGroup className={styles.dropdown}>
			    <DropdownButton title="Neighborhood" id="bg-nested-dropdown">
			      <MenuItem eventKey="1">Southie</MenuItem>
			      <MenuItem eventKey="2">Allston</MenuItem>
			      <MenuItem eventKey="3">Mission Hill</MenuItem>
			      <MenuItem eventKey="4">Downtown</MenuItem>
			    </DropdownButton>
			  </ButtonGroup>	
			</h3>
			
 	  </div>
    );
  }
}

export default CLPrompt
