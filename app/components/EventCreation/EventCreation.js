import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonInput, Input, OverlayTrigger, Popover, Modal} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

const EventCreation = (props) => (
        <div>
            <Button bsStyle="primary" bsSize="small" onClick={props.openModal}>
                Create Event
            </Button>
            <Modal show={props.isEditing} onHide={props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form>
                            <Input type="text" label="Event Name"  onChange={props.nameChange} placeholder="Enter name" />
                            <h5> When </h5>
                            <DateTimeField />

                            <Input type="select" label="Time Commitment" placeholder="Number" />
                            <Input type="select" label="" placeholder="Units" />

                            <Input type="checkbox" label="Capped?" defaultChecked/>
                            <Input type="text" label="Capped Amount" placeholder="How many?" />

                            <Input type="text" label="Where" onChange={props.addressChange} placeholder="Address" />
                            <Input type="text" label="" placeholder="City" />
                            <Input type="select" label="" placeholder="State" />
                            <Input type="text" label="" onChange={props.zipcodeChange} placeholder="Zip Code" />
                            <Input type="select" label="Neighborhood" placeholder="Select Neighborhood" >
                                <option value="select">select</option>
                                <option value="other">...</option>
                            </Input>

                            <Input type="select" label="Required Skills" multiple >
                                <option value="select">multiple options tho</option>
                                <option value="other">Integrity</option>
                                <option value="other">Responsibility</option>
                                <option value="other">Friendliness</option>
                                <option value="other">...</option>
                            </Input>

                            <Input type="select" label="Event Manager" onChange={props.managerChange} placeholder="Event Manager">
                                <option value="select">select</option>
                                <option value="other">...</option>
                            </Input>

                            <Input type="textarea" label="Description" placeholder="What is this event about?" />

                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.handleCreation}> Submit </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

export default EventCreation