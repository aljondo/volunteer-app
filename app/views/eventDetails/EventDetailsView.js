import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from './eventdetails.scss'
import EventDetailsContainer from '../../containers/EventDetailsContainer';
import FullHeaderContainer from '../../containers/Header/FullHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'

class EventDetailsView extends Component {
    render() {
        return (
            <div className={styles.viewWrapper}>
                <FullHeaderContainer />
                <EventDetailsContainer eventId={this.props.params.eventId}/>
                <FooterContainer />
            </div>
        );
    }
}

export default EventDetailsView
