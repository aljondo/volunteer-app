import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router'
import styles from './searchresult.scss'


const EventSearchResults = (props) => (
    <div className={styles.searchResult}>
        {props.events.map(function(event, index) {
            return (
                <div key={index}>
                    <Panel collapsible header={event.name} eventKey={index} bsStyle="primary">
                      {event.name}
                      <Link to={'/event/' + event.id}>Details</Link>
                    </Panel>
                </div>
            );
        })}
    </div>
);

export default EventSearchResults
