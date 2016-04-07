import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchOrg } from '../../actions/orgs'
import { push as pushRoute } from 'react-router-redux';
import ExternalOrganization from '../../components/Organization/About'

class ExternalOrganizationContainer extends Component {

    componentDidMount() {
        this.props.dispatch(
            fetchEvent(this.props.orgId)
        );
    }

    render() {
        return (
            <ExternalOrganization event={this.props.org}/>
        )
    }
}

ExternalOrganizationContainer.propTypes = {
    orgId: PropTypes.string,
    org: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
    {
        org: state.orgs.org
    }
);

export default connect(mapStateToProps)(ExternalOrganizationContainer)
