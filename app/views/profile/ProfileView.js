import React, { Component } from 'react';
import ProfileContainer from '../../containers/ProfileContainers/ProfileContainer'
import FullHeaderContainer from '../../containers/Header/FullHeaderContainer'

class ProfileView extends Component {
    render() {
        return (
            <div>
                <FullHeaderContainer />
                <ProfileContainer />
            </div>
        );
    }
}

export default ProfileView
