import React, { Component } from 'react';
import { Button, ButtonToolbar, Input, OverlayTrigger, Popover} from 'react-bootstrap';


const RequestingAttend = (props) => {

    const AttendPopover =
        <Popover id="volconfirm" title="Volunteer Confirmation">
            <div>
                <h3> Profile Info + Skills </h3>
                <h5> {props.volunteer.name}</h5>
                <br/>
                <h3> Volunteer History </h3>
                <Button> Confirm </Button>
            </div>
        </Popover>

        console.log(props);
            console.log("hey");
    return (
        <OverlayTrigger trigger='click' placement='bottom' overlay={AttendPopover}>
            <img src='http://placekitten.com/g/400/200' />
        </OverlayTrigger>
    );
}

export default RequestingAttend

