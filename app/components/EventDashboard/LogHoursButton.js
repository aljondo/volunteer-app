import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, Input, OverlayTrigger, Popover } from 'react-bootstrap';
import LogHoursPopover from './LogHoursPopover'


const LogHoursButton = (props) => (
    <OverlayTrigger trigger='click' placement='right' overlay={ LogHoursPopover({}) }>
        <Button bsStyle='primary' bsSize='large' active> Log Hours </Button>
    </OverlayTrigger>
);


export default LogHoursButton;
