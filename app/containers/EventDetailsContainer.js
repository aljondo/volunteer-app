import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEvent } from '../actions/events/eventActions'
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
            console.log(this.props.user);
            //TODO actually attend the event
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
    isAuthenticated: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({fetchEvent, pushRoute}, dispatch)
);

const mapStateToProps = (state) => (
    {
        event: state.event.event,
        isAuthenticated: state.auth.isAuthenticated
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)
