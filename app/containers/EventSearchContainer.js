import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Col, Row, Grid } from 'react-bootstrap'
import {
    fetchSearchEvents,
    resetSearchEvents,
    setCategory,
    setNeighborhood } from "../actions/events/searchEventsActions";
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
            this.props.fetchSearchEvents();
        }
    }

    componentWillUnmount(){
        this.props.resetSearchEvents();
    }

    searchForEvents() {
        this.props.fetchSearchEvents();
    }

    onAdvancedClick() {
        if(!this.state.advancedSearch) {
            this.setState({ advancedSearch: true});
        }
        else {
            this.setState({ advancedSearch: false});
        }
    }

    categoryChange(e) {
        this.props.setCategory(e.target.value);
    }

    neighborhoodChange(e){
        this.props.setNeighborhood(e.target.value);
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
                            <EventSearchForm categoryChange={this.categoryChange.bind(this)}
                                             neighborhoodChange={this.neighborhoodChange.bind(this)}/>
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
    events: PropTypes.array.isRequired,
    category: PropTypes.object,
    neighborhood: PropTypes.object
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        fetchSearchEvents,
        resetSearchEvents,
        setCategory,
        setNeighborhood,
        pushRoute }, dispatch)
);

const mapStateToProps = (state) => (
    {
        events: state.searchEvents.events,
        category: state.searchEvents.category,
        neighborhood: state.searchEvents.neighborhood
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(EventSearchContainer)