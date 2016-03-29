import React, { Component } from 'react';
import styles from './homeblurb.scss'

// a hello world component
class HomeBlurb extends Component {
  render() {
    return (
      <div className={styles.homeblurb}>
      	<h1>Americorps</h1>
      	<h3>Volunteer Today</h3>
      </div>
    );
  }
}

export default HomeBlurb
