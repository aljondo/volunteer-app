import React, { Component } from 'react';
import { Panel, Accordion } from 'react-bootstrap';
import EventTable from './EventTable'


const UpcomingEvents = (props) => (
    <Accordion>
        <div>
            <Panel collapsible header="Event #1" eventKey="2" bsStyle="primary">
                <EventTable />
            </Panel>
            <Panel collapsible header="Event #2" eventKey="2" bsStyle="primary">
                <EventTable />
            </Panel>
        </div>
    </Accordion>
);

export default UpcomingEvents