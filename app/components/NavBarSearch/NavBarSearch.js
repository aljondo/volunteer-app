import React, { Component } from 'react';
import styles from './navbarsearch.scss'

// a hello world component
class NavBarSearch extends Component {
  render() {
    return (
      <input className={styles.search} type="text"/>
    );
  }
}

export default NavBarSearch
