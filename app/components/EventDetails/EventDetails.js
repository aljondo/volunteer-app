import React, { Component } from 'react';
import './eventdetails.css';
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap'
import GoogleMapContainer from '../../containers/GoogleMapContainer/GoogleMapContainer'


const EventDetails = (props) => (
    <Grid id="wrapper">
        <Row>
            <Col xs={12} sm={7} className="left-side">
                <Row>
                    <Col xs={12} id="title">
                        ORGANIZATION NAME (not in json yet)
                    </Col>
                    <Col xs={12} id="name">
                        <div className="nameLabel">Event Name:</div>
                        <div className="nameValue">{props.event.name}</div>
                    </Col>
                    <Col xs={12} id="date">
                       <div className="dateLabel">When:</div>
                       <div className="dateValue">{props.event.date}</div>
                    </Col>
                    <Col xs={12} id="time">
                        <div className="timeLabel">Time Commitment:</div>
                        <div className="timeValue">This is where the time commitment will go</div>
                    </Col>
                    <Col xs={12} id="description">
                        <div className="descriptionLabel">Description:</div>
                        <div className="descriptionValue">This is where the event description will go</div>
                    </Col>
                    <Col xs={12} id="skills">
                        <div className="skillsLabel">Relevant skills/Interests:</div>
                        <div className="skillsValue">{props.event.details}</div>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} sm={5} className="right-side">
                <Row>
                    <Col xs={12} id="location">
                        <div className="locationLabel">Location:</div>
                        <div className="locationValue">{props.event.location}</div>
                    </Col>
                    <Col xs={12} id="map">
                        <div className="mapContainer">
                            <GoogleMapContainer address={props.event.location} />
                        </div>
                    </Col>
                    <Col xs={12} id="button">
                        <Button bsStyle="primary" bsSize="large">RSVP</Button>
                    </Col>
                    <Col xs={12} id="contact">
                        <div className="contactLabel">Contact info:</div>
                        <div className="contactValue">contact info goes here</div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Grid>
);

export default EventDetails