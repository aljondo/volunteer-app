import React, { Component } from 'react';
import Hello from '../components/Hello'
import UsersHello from '../containers/UsersHello'

class IndexView extends Component {
  render() {
    return (
      <div>
        <p> This is an index page</p>
        <Hello />
        <UsersHello />
      </div>
    );
  }
}

export default IndexView
