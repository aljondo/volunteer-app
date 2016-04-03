import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class EventTable extends Component {

    render() {
        return(
            <Table fill responsive bordered={false}>
                <tbody>
                <tr>
                    <td> Organization Name </td>
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
    }

}

export default EventTable