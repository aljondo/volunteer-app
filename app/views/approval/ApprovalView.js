import React, { Component } from 'react';
import VolunteerApproval from '../../components/VolunteerApproval/VolunteerApproval'
import {Link} from 'react-router';

class ApprovalView extends Component {
  render() {
      return (
          <div id="outer">
            <VolunteerApproval />
          </div>
      );
  }
}

export default ApprovalView
