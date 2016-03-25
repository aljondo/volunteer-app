import React, { Component } from 'react';
import Hello from '../../components/Hello'
import Event from '../../components/Event'
import UsersHello from '../../containers/UsersHello'
import {Link} from 'react-router'

class ProfileView extends Component {
  render() {
    return (
      <div>
        <h2> This is the profile page</h2>
        <Event />
      </div>
    );
  }
}

export default ProfileView
