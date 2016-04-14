import React, { Component } from 'react';
import OrganizationContainer from '../../containers/OrganizationContainer';

class OrganizationView extends Component {
    render() {
        return (
            <OrganizationContainer orgId={this.props.params.orgId} />
        );
    }
}
export default OrganizationView;
