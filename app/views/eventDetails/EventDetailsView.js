import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from './eventdetails.scss'
import EventDetailsContainer from '../../containers/EventDetailsContainer';
import NavBar from '../../containers/NavBarContainer';

class EventDetailsView extends Component {
    render() {
        return (
            <div className={styles.viewWrapper}>
                <NavBar />
                <EventDetailsContainer eventId={this.props.params.eventId}/>
            </div>
        );
    }
}

export default EventDetailsView
