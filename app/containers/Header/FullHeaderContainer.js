import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import FullHeader from '../../components/Header/FullHeader';
import { bindActionCreators } from 'redux';
import {push as pushRoute } from 'react-router-redux';

class FullHeaderContainer extends Component {
    logoutUser() {
        this.props.logout();
    }
    render() {
        return (<FullHeader isAuthenticated = {this.props.isAuthenticated}
                              logoutUser = {this.logoutUser.bind(this) } /> );
    }
}

FullHeaderContainer.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({logout, pushRoute}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FullHeaderContainer)