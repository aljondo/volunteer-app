import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Popover } from 'react-bootstrap';


const LogHoursPopover = (props) => (
    <Popover id="hourspop" title="Log Hours">
        <div>
            <form className="form-horizontal">
                <Input type="text" label="Start Time:" labelClassName="col-xs-2" wrapperClassName="col-xs-5"/>
                <Input type="text" label="End Time:" labelClassName="col-xs-2" wrapperClassName="col-xs-5"/>
            </form>
            <Button> Submit </Button>
        </div>
    </Popover>
);

export default LogHoursPopover