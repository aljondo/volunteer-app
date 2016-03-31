import React, { PropTypes, Component } from 'react'
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'
import { connect } from 'react-redux'
import {fetchFeaturedEvents} from "../../actions/events";

// a Login Form component
class FeaturedEvents extends Component {
    componentDidMount() {
        this.props.dispatch(
            fetchFeaturedEvents()
        );
    }
    render() {
        var eventsTable = this.props.events.map(function (event, index) {
            return (
                <tr key={ index }>
                    <td>
                        <a href="#">{event.name}</a> by <a href="#">{event.org}</a> at
                        <strong>{event.date} {event.time}</strong>
                    </td>
                </tr>
            );
        });

        return(

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

FeaturedEvents.propTypes = {
    events: PropTypes.array.isRequired
}


function mapStateToProps(state) {
    return {
        events: state.events.featuredEvents }
}

export default connect(mapStateToProps)(FeaturedEvents)