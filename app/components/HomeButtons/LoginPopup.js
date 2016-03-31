import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import { Modal, form, Button, Input } from 'react-bootstrap';
require('bootstrap/dist/css/bootstrap.css');

class Popup extends Component {
    render() {                   
        return  (
            <div className="static-modal">  
                <Modal.Body>
                    <Input type="email" id="email" label="Email:" placeholder="Enter Email"/>
                    <Input type="password" id="password" label="Password:" placeholder="Enter Password" />
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/profile">
                        <Button bsStyle="primary">Login</Button>
                    </Link>
                    <Button bsStyle="default" onClick={this.props.onCancelClick}>Cancel</Button>
                </Modal.Footer>
            </div>
            )
       }
                            
}

export default Popup