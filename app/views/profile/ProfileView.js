import React, { Component } from 'react';
import Hello from '../../components/Hello'
import UsersHello from '../../containers/UsersHello'
import {Link} from 'react-router'
import AboutMe from '../../components/aboutMe/AboutMe'
import ProfileChart from '../../components/chart/ProfileChart'

class ProfileView extends Component {
  render() {
    return (
      <div>
           <div>
                <AboutMe />
                <ProfileChart />
           </div>
      </div>
    );
  }
}

export default ProfileView
