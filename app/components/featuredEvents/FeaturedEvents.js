import React, { Component } from 'react';
import {Col, Button, Popover, ButtonToolbar, OverlayTrigger, Overlay} from 'react-bootstrap';
require('bootstrap/dist/css/bootstrap.css');

const events = [
       {name: "Tutoring in weightlifting",
        org: "Swole4America",
        time: "4 pm",
        date: "3/20/16",
        timeCommitment: "3 hours",
        description: "The Downingtown Community Education Foundation will hold its first Art Gala and Auction on April 6, 2016.  The Gala will take place at Dane Decor in Downingtown from 4 - 7 pm" },

       {name: "Tutoring in weightlifting",
        org: "Swole4America",
        time: "4 pm",
        date: "3/20/16",
        timeCommitment: "3 hours",
        description: "The Downingtown Community Education Foundation will hold its first Art Gala and Auction on April 6, 2016.  The Gala will take place at Dane Decor in Downingtown from 4 - 7 pm"}
];

class featuredEvents extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            events
        };
    }

    render() {
        var eventsTable = this.state.events.map(function(event, index){
            return (
                <tr key={ index }>
                    <td>
                        <a href="#">{event.name}</a> by <a href="#">{event.org}</a> at <strong>{event.date} {event.time}</strong>
                    </td>
                </tr>
                );
            })
        return (
            <table className = "table">
                <thead>
                    <tr>
                        <th>
                            <h3>Featured Event</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {eventsTable}
                </tbody>
            </table>

        );  
    };   
}

export default featuredEvents;