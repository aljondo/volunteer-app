import React, { Component } from 'react';
import { Button, ButtonToolbar, Input, OverlayTrigger, Popover} from 'react-bootstrap';

var HourPopover =
    <Popover id="hrconfirm" title="Hour Confirmation">
        <div>
            <h5>Start Time:</h5>
            <h5>End Time:</h5>
            <h5>Total: </h5>
            <Button> Submit </Button>
        </div>
    </Popover>


class RequestingHours extends Component {

    render() {
        return (
            <OverlayTrigger trigger='click' placement='bottom' overlay={HourPopover}>
                <img src='http://placekitten.com/g/400/200' />
            </OverlayTrigger>
        );
    }
}

export default RequestingHours