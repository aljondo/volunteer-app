import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from './eventdetails.scss'
import EventDetailsContainer from '../../containers/EventDetailsContainer';
import SimpleHeaderContainer from '../../containers/Header/SimpleHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'

class EventDetailsView extends Component {
    render() {
        return (
            <div className={styles.viewWrapper}>
                <SimpleHeaderContainer />
                <EventDetailsContainer eventId={this.props.params.eventId}/>
                <FooterContainer />
            </div>
        );
    }
}

export default EventDetailsView
