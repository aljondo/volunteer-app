import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import SimpleHeader from '../../components/Header/SimpleHeader';
import { bindActionCreators } from 'redux';
import {push as pushRoute } from 'react-router-redux';

class SimpleHeaderContainer extends Component {
    logoutUser() {
        this.props.logout();
    }
    render() {
        return (<SimpleHeader isAuthenticated = {this.props.isAuthenticated}
                        logoutUser = {this.logoutUser.bind(this) } /> );
    }
}

SimpleHeaderContainer.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({logout, pushRoute}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SimpleHeaderContainer)