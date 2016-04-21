import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './searchresult.scss'


const EventSearchResults = (props) => (
    <Col xs={11} className={styles.searchResults}>
        {props.events.map(function(event, index) {
            return (
                <div key={index} className={styles.searchResult}>
                    <Panel collapsible header={event.name} eventKey={index} bsStyle="primary">
                      {event.name}
                      <Link to={'/event/' + event.id}>Details</Link>
                    </Panel>
                </div>
            );
        })}
    </Col>
);

export default EventSearchResults
