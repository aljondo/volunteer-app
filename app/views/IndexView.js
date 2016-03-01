import React, { Component } from 'react';
import Hello from '../components/Hello'

class IndexView extends Component {
  render() {
    return (
      <div>
        <p> This is an index page</p>
        <Hello />
      </div>
    );
  }
}

export default IndexView
