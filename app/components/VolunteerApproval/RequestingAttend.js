import React, { Component } from 'react';
import { Button, ButtonToolbar, Input, OverlayTrigger, Popover} from 'react-bootstrap';

var AttendPopover =
    <Popover id="volconfirm" title="Volunteer Confirmation">
        <div>
            <h3> Profile Info + Skills </h3>
            <h5> PULL FROM PROFILE HERE </h5>
            <br/>
            <h3> Volunteer History </h3>
            <h5> PULL FROM PROFILE HERE </h5>
            <Button> Confirm </Button>
        </div>
    </Popover>


class RequestingAttend extends Component {

    render() {
        return (
            <OverlayTrigger trigger='click' placement='bottom' overlay={AttendPopover}>
                <img src='http://placekitten.com/g/400/200' />
            </OverlayTrigger>
        );
    }
}

export default RequestingAttend

