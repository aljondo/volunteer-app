import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, Input, OverlayTrigger, Popover } from 'react-bootstrap';
import LogHoursPopoverContainer from '../../../../containers/ProfileContainers/Volunteer/LogHoursContainer'


const LogHoursButton = (props) => (
    <OverlayTrigger trigger='click' placement='right' overlay={ <LogHoursPopoverContainer /> }>
        <Button bsStyle='primary' bsSize='large' active> Log Hours </Button>
    </OverlayTrigger>
);


export default LogHoursButton;
