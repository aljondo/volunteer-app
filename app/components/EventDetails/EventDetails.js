import React, { Component } from 'react';
import styles from './eventdetails.scss'
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap'
import Icon from 'react-fa';
import GoogleMapContainer from '../../containers/GoogleMapContainer'
import { Link } from 'react-router'


const EventDetails = (props) => (
    <Grid className={styles.wrapper}>
        <Row className={styles.row}>
            <Col xs={12} className={styles.detailsBanner}>
                <div className={styles.header}>
                    <Link to={'/organization/'+ props.event.org}>
                        <h2>{props.event.org_name ? props.event.org_name : "Organization name"}</h2>
                        <Icon className={styles.icon} name='arrow-right' size={'3x'}/>
                     </Link>
                </div>
            </Col>
            <Col xs={12} sm={6} className={styles.leftSide}>
                <Row>
                    <Col xs={12} className={styles.eventName}>
                        <div className={styles.nameLabel}>Event</div>
                        <div className={styles.nameValue}>{props.event.name}</div>
                    </Col>
                    <Col xs={12} className={styles.dateContainer}>
                       <div className={styles.dateLabel}>When:</div>
                       <div className={styles.dateValue}>{props.event.start_at ? props.event.start_at.split(/[ \-\:]+/).splice(0,3).reverse().join("/") : null}</div>
                    </Col>
                    <Col xs={12} className={styles.descriptionContainer}>
                        <div className={styles.descriptionLabel}>Description:</div>
                        <div className={styles.descriptionValue}>{props.event.about}</div>
                    </Col>
                    {/** <Col xs={12} className={styles.skillsContainer}>
                        <div className={styles.skillsLabel}>Relevant skills/Interests:</div>
                        <div className={styles.skillsValue}></div>
                    </Col> */}
                </Row>
            </Col>
            <Col xs={12} sm={6} className={styles.rightSide}>
                <Row>
                    <Col xs={12} className={styles.locationContainer}>
                        <div className={styles.locationLabel}>Location</div>
                        <div className={styles.locationValue}>{props.event.address} {props.event.city}, {props.event.state}</div>
                    </Col>
                    <Col xs={12}>
                        <div className={styles.mapContainer}>
                            <GoogleMapContainer address={props.event.address} city={props.event.city} state={props.event.state}/>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div>
                            {props.showLoginRegister ? <div className={styles.loginWarning}>You must be signed in to attend an event</div> : null}
                        </div>
                        <div className={styles.attendButtonContainer}>
                            {props.showLoginRegister ? null : <Button className={styles.attendButton} onClick={props.attendClick}>Attend</Button>}
                            {props.showLoginRegister ? <Button className={styles.attendButton} onClick={props.loginClick}>Login</Button> : null}
                            {props.showLoginRegister ? <Button className={styles.attendButton} onClick={props.registerClick}>Register</Button> : null}
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={styles.contactContainer}>
                            <div className={styles.contactLabel}>Questions?</div>
                            <div className={styles.introValueWrapper}>
                                <div className={styles.contactIntro}>Reach us at</div>
                                <div className={styles.contactValue}>poc@gmail.com</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Grid>
);

export default EventDetails