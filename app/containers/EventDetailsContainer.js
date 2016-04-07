import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEvent } from '../actions/events'
import { push as pushRoute } from 'react-router-redux';
import EventDetails from '../components/EventDetails/EventDetails'


class EventDetailsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(
            fetchEvent(this.props.eventId)
        );
    }

    render() {
        return (
            <EventDetails event={this.props.event}/>
        )
    }
}

EventDetailsContainer.propTypes = {
    eventId: PropTypes.string,
    event: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
    {
        event: state.events.event
    }
);

export default connect(mapStateToProps)(EventDetailsContainer)
