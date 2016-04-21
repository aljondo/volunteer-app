import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Popover } from 'react-bootstrap';


const LogHoursPopover = (props) => (
    <Popover id="hourspop" title="Log Hours">
        <div>
            <form className="form-horizontal">
                <Input type="text" label="Start Time:" onChange={props.startChange} labelClassName="col-xs-2" wrapperClassName="col-xs-5"/>
                <Input type="text" label="End Time:" onChange={props.endChange} labelClassName="col-xs-2" wrapperClassName="col-xs-5"/>
            </form>
            <Button onClick={props.submitHours}> Submit </Button>
        </div>
    </Popover>
);

export default LogHoursPopover