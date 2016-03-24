/**
 * Created by branden on 3/21/16.
 */
import React, { Component } from 'react';
import {Link} from 'react-router'
import styles from './homeview.scss'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h2 className={styles.header}> Welcome to Americorps Home page</h2>
            </div>
        );
    }
}

export default HomePage