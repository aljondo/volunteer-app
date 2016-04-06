import React, { Component } from 'react';
import styles from './hourverification.scss';
import { Button, ButtonToolbar, Input, OverlayTrigger, Popover} from 'react-bootstrap';

const RequestingHours = (props) => {

    const HourPopover =
        <Popover id="hourPopover" title="Hour Confirmation">
            <div>
                <h5>Start Time:</h5>
                <h5>End Time:</h5>
                <h5>Total: </h5>
                <Button onClick={props.confirmHours}> Submit </Button>
            </div>
        </Popover>;

    return (
        <OverlayTrigger trigger='click' placement='bottom' overlay={HourPopover}>
            <img className={styles.carouselImg} src='http://placekitten.com/g/400/200' />
        </OverlayTrigger>
    );
};

export default RequestingHours