import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import EventManipulationContainer from '../../../../containers/ProfileContainers/Organization/EventManipulationContainer';

const EventTable = (props) => (
    <Table fill responsive bordered={false}>
        <tbody>
        <tr>
            <td> Organization Name </td>
            <EventManipulationContainer event= {props.event} buttonText= {"Edit Event"} newEvent={false}/>
        </tr>
        <tr>
            <td> Time Commitment </td>
        </tr>
        <tr>
            <td> Details </td>
        </tr>
        </tbody>
    </Table>
);

export default EventTable