/**
 * Created by branden on 3/21/16.
 */
import React, { Component } from 'react';
import {Link} from 'react-router'
import { Button } from 'react-bootstrap'
import HomeBlurb from '../../components/HomeBlurb/HomeBlurb'
import CategoryLocationForm from '../../components/CategoryLocationForm/CategoryLocationForm'
import SearchButton from '../../components/SearchButton/SearchButton'
import HomeButtons from '../../components/HomeButtons/HomeButtons'
import styles from './homeview.scss'

class HomePage extends Component {
    render() {
        return (
            <div className={styles.home}>
            	<div className={styles.buttons}>
            	    <HomeButtons />
            	</div>
	            <div className={styles.homeblurb}>
	        		<HomeBlurb />
	        		<div className={styles.prompt}>
	        			<CategoryLocationForm />
	        			<div className={styles.searchbutton}>
	        				<SearchButton />
	        			</div>
	        		</div>
	        	</div>
            </div>
        );
    }
}

export default HomePage