import React, { Component } from 'react';
import {Button, Input, Col, center} from 'react-bootstrap'
import KeywordForm from '../../components/KeywordForm/KeywordForm'
import styles from './advancedsearch.scss'

const AdvancedSearch = (props) => (
    	<div className={styles.advancedsearch}>
	    	<div className={styles.searchcheckboxes}>
	    		<form className={styles.checklist}>
		    		<p>Skills</p>
		    		<Input type="checkbox" label="Construction"/>
		    		<Input type="checkbox" label="Pets"/>
		    		<Input type="checkbox" label="Tutoring"/>
		    		<Input type="checkbox" label="Building"/>
		    		<Input type="checkbox" label="Cleaning"/>
		    	</form>
		    	<form className={styles.checklist}>
		    		<p>Locations</p>
		    		<Input type="checkbox" label="Southie"/>
		    		<Input type="checkbox" label="Dorchester"/>
		    		<Input type="checkbox" label="Mission Hill"/>
		    		<Input type="checkbox" label="Downtown"/>
		    		<Input type="checkbox" label="Allston"/>
		    		<Input type="checkbox" label="Roxbury"/>
		    		<Input type="checkbox" label="Jamaica Plain"/>
		    	</form>
		    	<form className={styles.checklist}>
		    		<p>Organizations</p>
		    		<Input type="checkbox" label="1"/>
		    		<Input type="checkbox" label="2"/>
		    		<Input type="checkbox" label="3"/>
		    		<Input type="checkbox" label="4"/>
		    		<Input type="checkbox" label="5"/>
		    		<Input type="checkbox" label="6"/>
		    	</form>
		    </div>
		    <div>
		    	<KeywordForm />
		    </div>
		    <div className={styles.button}>
				<Button bsStyle="primary">Search</Button>
		    </div>
		</div>
);

export default AdvancedSearch
