import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import Icon from 'react-fa';
import styles from './searchresult.scss'


const EventSearchResults = (props) => (
    <Col xs={12}className={styles.searchResults}>
        {props.events.map(function(event, index) {
            return (
                <Col key={index} xs={8} xsOffset={2} className={styles.col}>
                    <Col xs={12} className={styles.results}>
                        <Col md={10} xs={12}>
                            <Col xs={6} className={styles.name}>
                                {event.name}
                            </Col>
                            <Col xs={6} className={styles.date}>
                                <div className={styles.text}>
                                    {event.start_at ? event.start_at.split(/[ \-\:]+/).splice(0,3).reverse().join("/") : null}
                                </div>
                            </Col>
                            <Col xs={12} className={styles.about}>
                                {event.about}
                            </Col>
                            <Col xs={12} className={styles.location}>
                                {event.address} {event.city} {event.state}
                            </Col>
                        </Col>
                        <Col md={2} xs={12} className={styles.detailsBtnCol}>
                            <Link className={styles.detailsBtnLink}to={"/event/" + event.id}>
                                <Icon className={styles.detailsBtn} name='arrow-right' size={'5x'}/>
                            </Link>
                        </Col>
                    </Col>
                </Col>
            );
        })}
    </Col>
);

export default EventSearchResults
