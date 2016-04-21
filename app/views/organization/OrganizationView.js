import React, { Component } from 'react';
import OrganizationContainer from '../../containers/OrganizationContainer';
import FullHeaderContainer from '../../containers/Header/FullHeaderContainer'

class OrganizationView extends Component {
    render() {
        return (
            <div>
                <FullHeaderContainer />
                <OrganizationContainer orgId={this.props.params.orgId}/>
            </div>
        );
    }
}
export default OrganizationView;
