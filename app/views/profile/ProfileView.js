import React, { Component } from 'react';
import Hello from '../../components/Hello';
import UsersHello from '../../containers/UsersHello';
import {Link} from 'react-router';
import AboutMe from '../../components/aboutMe/AboutMe';
import ProfileChart from '../../components/chart/ProfileChart';
import FeaturedEvents from '../../components/featuredEvents/FeaturedEvents'
require('bootstrap/dist/css/bootstrap.css');

class ProfileView extends Component {
  render() {
    return (
      <div>
          <div className="col-sm-2">
              <br/>
              <AboutMe/>
          </div>
          <div className = "col-sm-2 pull-right">
              <br/>
              <FeaturedEvents />
              <h3>Hours</h3>
              <br/>
              <h3>All Time: 32</h3>
              <br/>
              <h3> Last Month: 6</h3>
              <ProfileChart />
          </div>
      </div>
    );
  }
}

export default ProfileView
