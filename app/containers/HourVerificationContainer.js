import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/users'
import HourVerification from "../components/HourVerification/HourVerification";
import RequestingHours from '../components/HourVerification/RequestingHours';

class HourVerificationContainer extends Component {

    componentDidMount() {
        this.props.dispatch(
            fetchUsers()
        );
    }

        confirmHours(index) {
        console.log("confirmed hours for user at index: " + index);
    }

    render() {
        var hourComponents = [];
        for (var x in this.props.users) {
            hourComponents.push(
                <RequestingHours confirmHours={this.confirmHours.bind(this, x)} user={this.props.users[x]}/>
            )
        }
        return (
            <HourVerification
                event={{"name": "Event name"}}
                volunteers={hourComponents} />
        )
    }
}

HourVerificationContainer.propTypes = {
    users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        //maybe change to user.items
        users: state.users.users }
}

export default connect(mapStateToProps)(HourVerificationContainer)
