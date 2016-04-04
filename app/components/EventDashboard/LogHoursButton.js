import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, Input, OverlayTrigger, Popover} from 'react-bootstrap';


var LogHoursPopover =
    <Popover id="hourspop" title="Log Hours">
        <div>
            <form className="form-horizontal">
                <Input type="text" label="Start Time:" labelClassName="col-xs-2" wrapperClassName="col-xs-5"/>
                <Input type="text" label="End Time:" labelClassName="col-xs-2" wrapperClassName="col-xs-5"/>
            </form>
            <Button> Submit </Button>
        </div>
    </Popover>


class LogHoursButton extends Component {

    render() {
        return (
            <OverlayTrigger trigger='click' placement='right' overlay={LogHoursPopover}>
                <Button bsStyle='primary' bsSize='large' active> Log Hours </Button>
            </OverlayTrigger>
        );
    }
}


export default LogHoursButton;
