/**
 * Created by Shiyu on 4/2/2016.
 */
import React, { Component } from 'react';
//import UpcomingEvents from '../../../components/EventDashboard/UpcomingEvents';

const About = (props) => (
        <div className="container">
            <h2>{props.org.name}</h2>
            <img src={props.org.photo}  alt="user" className="img-responsive"/>
            <div className="container">
                <h3>Mission</h3>
                <p className="container">{props.org.mission}</p>
            </div>
            <div className="container">
                <h3>Location</h3>
                <div className="container">
                    <h4>{props.org.address}</h4>
                    <h4>{props.org.city} {props.org.state} {props.org.zipCode}</h4>
                </div>
            </div>
            <div className="container">
                <h3>Upcoming Events</h3>
                    <div>
                        {/**<UpcomingEvents/>*/}
                </div>
            </div>
            <div className="container">
                <h3>Contact Us</h3>
                <div className="container">
                    <p>{props.org.email}</p>
                    <p>{props.org.phone}</p>
                </div>
            </div>
        </div>
    );

export default About;

