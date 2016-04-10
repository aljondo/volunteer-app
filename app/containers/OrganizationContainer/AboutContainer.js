/**
 * Created by Shiyu on 4/5/2016.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchOrg } from '../../actions/orgs'
import { push as pushRoute } from 'react-router-redux';
import About from '../../components/Organization/About'

class AboutContainer extends Component {

    componentDidMount() {
        this.props.dispatch(
            fetchOrg(this.props.orgId)
        );
    }

    render() {
        return (
            <About orgs={this.props.orgs}/>
        )
    }
}

AboutContainer.propTypes = {
    orgId: PropTypes.string,
    orgs: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
    {
        orgs: state.orgs.orgs
    }
);

export default connect(mapStateToProps)(AboutContainer)
