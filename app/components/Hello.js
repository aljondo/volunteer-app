import React, { Component } from 'react';
import styles from './hello.scss'

// a hello world component
class Hello extends Component {
  render() {
    return (
      <p className={styles.test}> Hello</p>
    );
  }
}

export default Hello
