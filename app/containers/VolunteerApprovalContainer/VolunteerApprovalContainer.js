import React, { PropTypes, Component } from 'react'
import VolunteerApproval from "../../components/VolunteerApproval/VolunteerApproval";
import { connect } from 'react-redux'

class VolunteerApprovalContainer extends Component {

  // componentDidMount() {
  //   this.props.dispatch(
  //     fetchFeaturedEvents()
  //   );
  // }

  	render() {
    	return (
    		<VolunteerApproval 
    		event={{"name": "Event name"}}
    		volunteers={[{"name": "bob"}, {"name": "bob"}, {"name": "bob"}, {"name": "bob"}, {"name": "bob"}, {"name": "bob"}]} />
		)
  	}
}

export default connect()(VolunteerApprovalContainer)
