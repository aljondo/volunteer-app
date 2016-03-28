import React, { PropTypes, Component } from 'react'
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'
import styles from './featuredEvents.scss'
import {fetchFeaturedEvents} from "../../actions/events";

// a Login Form component
class FeaturedEvents extends Component {
    componentDidMount() {
        this.props.dispatch(
            fetchFeaturedEvents()
        );
    }

    render() {
        return (
            <ul>
                {this.props.events.map((event, i) =>
                    <li key={i}>{event.name}</li>
                )}
            </ul>
        )
    }
}

FeaturedEvents.propTypes = {
    events: PropTypes.array.isRequired
}


export default FeaturedEvents