import React, { Component } from 'react';
import {Link} from 'react-router';
import EventDetailsContainer from '../../containers/EventDetailsContainer/EventDetailsContainer';

class EventDetailsView extends Component {
    render() {
        return (
            <div id="outer">
                <EventDetailsContainer eventId={this.props.params.eventId}/>
            </div>
        );
    }
}

export default EventDetailsView
