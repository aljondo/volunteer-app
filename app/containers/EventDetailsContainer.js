import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEvent, signUpForEvent, unsignUpForEvent } from '../actions/events/eventActions'
import { push as pushRoute } from 'react-router-redux';
import EventDetails from '../components/EventDetails/EventDetails'


class EventDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoginRegister: false
        };
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.eventId);
    }

    attendClick(){
        console.log("gets clicked");
        if (this.props.isAuthenticated){
            this.props.signUpForEvent({userId: this.props.user.id, eventId: this.props.eventId});
        } else {
            this.setState({showLoginRegister: true});
        }
    }

    loginClick(){
        this.props.pushRoute("/login");
    }

    registerClick(){
        this.props.pushRoute("/register");
    }

    render() {
        return (
            <EventDetails attendClick={this.attendClick.bind(this)}
                          showLoginRegister={this.state.showLoginRegister}
                          loginClick={this.loginClick.bind(this)}
                          registerClick={this.registerClick.bind(this)}
                          event={this.props.event}/>
        )
    }
}

EventDetailsContainer.propTypes = {
    eventId: PropTypes.string.isRequired,
    event: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
};

EventDetails.defaultProps = {
    event: {
        start_at: "",
    }
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({fetchEvent, signUpForEvent, unsignUpForEvent,  pushRoute}, dispatch)
);

const mapStateToProps = (state) => (
    {
        event: state.event.event,
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)
