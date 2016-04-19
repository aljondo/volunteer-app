import React, { Component } from 'react';
import {Col, Button,  Input} from 'react-bootstrap';
import EventManipulationContainer from '../../../containers/ProfileContainers/Organization/EventManipulationContainer';

//TODO Go through all available user fields and add them to this. Follow the same general formatting
//TODO Format this nicer, using scss, but probably wait for Zach to draw up how it should look

const OrgAboutMe = (props) => {
    return (
        <div>
            <div>
            <img src={'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEKgew92pwh3t6IaIj3PazmaN3yia21164I6mvCkFTTr96s5mG'}  alt="user" className="img-responsive"/>
            <h1>{props.user.name}</h1>
            <div>
                <h2>Profile</h2>
                <strong>Our Mission</strong>
                <p>{props.user.mission}</p>

                <p>
                    <strong>Phone #: </strong>
                    <span>{props.user.phone}</span>
                </p>
                <p>
                    <strong>Email: </strong>
                    <span>{props.user.email}</span>
                </p>
            </div>
            <br/>
            <Button bsStyle='primary' onClick={props.openEdit}>Edit</Button>
            </div>
            <div>
                <EventManipulationContainer buttonText={"Create Event"} newEvent={true}/>
            </div>
        </div>
    );

};


export default OrgAboutMe;