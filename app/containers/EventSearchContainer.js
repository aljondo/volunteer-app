import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Col, Row, Grid } from 'react-bootstrap'
import { fetchEvents, reset } from "../actions/events";
import { push as pushRoute } from 'react-router-redux';
import EventSearchForm from '../components/EventSearchForm/EventSearchForm'
import AdvancedSearch from '../components/AdvancedSearch/AdvancedSearch'
import EventSearchResults from '../components/EventSearchResults/EventSearchResults'

class EventSearchContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            advancedSearch : false
        };
    }

    componentDidMount() {
        if (this.props.events.length > 0){
            this.props.fetchEvents();
        }
    }

    componentWillUnmount(){
        this.props.reset();
    }

    searchForEvents() {
        this.props.fetchEvents();
    }

    onAdvancedClick() {
        if(!this.state.advancedSearch) {
            this.setState({ advancedSearch: true});
        }
        else {
            this.setState({ advancedSearch: false});
        }
    }

    render() {
        return (
            <Grid id="grid">
                <Row>
                    <Col xs={12}>
                        <h1>Find an Event</h1>
                    </Col>
                    <Col xs={12}>
                        <div>
                            <EventSearchForm />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <a onClick={this.onAdvancedClick.bind(this)}>Advanced Search Options</a>
                        { this.state.advancedSearch ? <AdvancedSearch /> : null }
                    </Col>
                    <Col xs={12}>
                        <div>
                            <Button onClick={this.searchForEvents.bind(this)} bsStyle="primary">Search</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <EventSearchResults events={this.props.events} />
                </Row>
            </Grid>
        );
    }
}

EventSearchContainer.propTypes = {
    events: PropTypes.array.isRequired
};

EventSearchContainer.defaultProps = {
    events: []
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ fetchEvents, reset, pushRoute }, dispatch)
);

const mapStateToProps = (state) => (
    {events: state.events.events}
);

export default connect(mapStateToProps, mapDispatchToProps)(EventSearchContainer)