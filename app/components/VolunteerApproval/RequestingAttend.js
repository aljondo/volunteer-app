import React, { Component } from 'react';
import styles from './volunteerapproval.scss';
import { Button, ButtonToolbar, Input, OverlayTrigger, Popover} from 'react-bootstrap';


const RequestingAttend = (props) => {

    const AttendPopover =
        <Popover id="attendPopover" title="Volunteer Confirmation">
            <div>
                <h3> Profile Info + Skills </h3>
                <h5>{props.user.name}</h5>
                <br/>
                <h3> Volunteer History </h3>
                <Button onClick={props.confirmUser}>Confirm</Button>
            </div>
        </Popover>;

    return (
        <OverlayTrigger trigger='click' placement='bottom' overlay={AttendPopover}>
            <img className={styles.carouselImg} src='http://placekitten.com/g/400/200' />
        </OverlayTrigger>
    );
};

export default RequestingAttend

