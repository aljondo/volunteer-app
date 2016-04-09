import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import NavBar from '../components/NavBar/NavBar';
import { bindActionCreators } from 'redux';
import {push as pushRoute } from 'react-router-redux';

class NavBarContainer extends Component {
    logoutUser() {
        this.props.logout();
    }
    render() {
        return (<NavBar isAuthenticated = {this.props.isAuthenticated}
                        logoutUser = {this.logoutUser.bind(this) } /> );
    }
}

NavBarContainer.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({logout, pushRoute}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)