import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonInput, Input, OverlayTrigger, Popover, Modal} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

const EventCreation = (props) => (
    <div>
        <Button bsStyle="primary" bsSize="small" onClick={props.openModal}>
            {props.buttonText}
        </Button>
        <Modal show={props.isEditing} onHide={props.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <form>
                        <Input type="text" defaultValue={props.event.name} label="Event Name"  onChange={props.nameChange} placeholder="Enter name" />
                        <h5> When </h5>
                        <Input type="select" defaultValue={props.event.month} label="Month" onChange={props.monthChange} >
                            <option value="">N/A</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </Input>
                        <Input type="select" defaultValue={props.event.day} label="Day" onChange={props.dayChange} >
                            <option value="">N/A</option>
                            {function(){
                                var result = [];
                                for (var i=1; i <= 31; i++) {
                                    result.push(i);
                                }
                                return result.map(function (x, i) {
                                    return <option value={result[i]} key={result[i]}>{result[i]}</option>;
                                })
                            }()}
                        </Input>
                        <Input type="select" defaultValue={props.event.year} label="Year" onChange={props.yearChange}  >
                            <option value="">N/A</option>
                            {function(){
                                var result = [];
                                for (var i=2016; i <= 2018; i++) {
                                    result.push(i);
                                }
                                return result.map(function (x, i) {
                                    return <option value={result[i]} key={result[i]}>{result[i]}</option>;
                                })
                            }()}
                        </Input>

                        <Input type="select" label="Time Commitment" placeholder="Number" />
                        <Input type="select" label="" placeholder="Units" />

                        <Input type="checkbox" defaultValue={props.event.capped} label="Capped?" oChange={props.capChange} defaultChecked/>
                        <Input type="text" label="Capped Amount" placeholder="How many?" />

                        <Input type="text"  defaultValue={props.event.address} label="Where" onChange={props.addressChange} placeholder="Address" />
                        <Input type="text" label="" placeholder="City" />
                        <Input type="select" label="" placeholder="State" />
                        <Input type="text" defaultValue={props.event.zipcode} label="" onChange={props.zipcodeChange} placeholder="Zip Code" />
                        <Input type="select" label="Neighborhood" placeholder="Select Neighborhood" >
                            <option value="">N/A</option>
                            <option value="allston">Allston</option>
                            <option value="backbay">Back Bay</option>
                            <option value="bayvillage">Bay Village</option>
                            <option value="beacon">Beacon Hill</option>
                            <option value="brighton">Brighton</option>
                            <option value="charlestown">Charlestown</option>
                            <option value="chinatown">Chinatown / Leather District</option>
                            <option value="dorchester">Dorchester</option>
                            <option value="downtown">Downtown</option>
                            <option value="eastboston">East Boston</option>
                            <option value="fenwaykenmore">Fenway Kenmore</option>
                            <option value="hyde">Hyde Park</option>
                            <option value="jamaica">Jamaica Plain</option>
                            <option value="mattapan">Mattapan</option>
                            <option value="middorchester">Mid Dorchester</option>
                            <option value="missionhill">Mission Hill</option>
                            <option value="northend">North End</option>
                            <option value="roslindale">Roslindale</option>
                            <option value="roxbury">Roxbury</option>
                            <option value="southboston">South Boston</option>
                            <option value="southend">South End</option>
                            <option value="westend">West End</option>
                            <option value="westroxbury">West Roxbury</option>
                            <option value="greater">Greater Boston Area / Outside City</option>
                        </Input>

                        <Input type="select" label="Required Skills" multiple >
                            <option value="public"> Public Relations / Speaking </option>
                            <option value="teaching"> Teaching / Tutoring </option>
                            <option value="it"> IT / Computer </option>
                            <option value="administrative"> Administrative </option>
                            <option value="legal"> Legal </option>
                            <option value="management"> Management </option>
                            <option value="handiwork"> Handiwork </option>
                            <option value="arts"> Fine Arts </option>
                            <option value="language"> Foreign Language </option>
                            <option value="tefl"> TEFL / TESOL </option>
                            <option value="writing">Writing / Editing </option>
                            <option value="event"> Event Planning </option>
                            <option value="sports"> Sports / Recreation </option>
                        </Input>

                        <Input type="text" label="Event Manager" defaultValue={props.event.manager} onChange={props.managerChange} placeholder="Event Manager email" />


                        <Input type="textarea" defaultValue={props.event.description} onChange={props.updateDescription} label="Description" placeholder="What is this event about?" />

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