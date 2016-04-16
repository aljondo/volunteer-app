import React, { Component } from 'react';
import EventTable from './EventTable'

const EventHistory = (props) => (

    <div>
        <div className="panel panel-primary">
            <div className="panel-heading">
                <div className="panel-title pull-left">
                    <h2>Event Name </h2>
                </div>
                <div className='clearfix'> </div>
            </div>
            <div className="panel-body">
                <EventTable />
            </div>
        </div>
    </div>
);

export default EventHistory