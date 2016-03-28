import React, { Component } from 'react';
import Hello from '../../components/Hello'
import UsersHello from '../../containers/UsersHello'
import FeaturedEvents from '../../containers/FeaturedEvents'
import {Link} from 'react-router'

class ProfileView extends Component {
  render() {
    return (
      <div>
        <h2> This is the profile page</h2>
          <FeaturedEvents />
          <p>This is an example of using a component</p>
        <Hello />
        All users found from http request
        <UsersHello />
      </div>
    );
  }
}

export default ProfileView
