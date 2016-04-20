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
import EventSearchResults from '../components/EventSearchResults/EventSearchResults'
import styles from '../../app/views/home/homeview.scss'
import Icon from 'react-fa'
import {Link} from 'react-router'

class EventSearchHomeContainer extends Component {

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
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2} className={styles.search}>
            <Col xs={11}>
                <div>
                    <EventSearchForm categoryChange={this.categoryChange.bind(this)}
                                     neighborhoodChange={this.neighborhoodChange.bind(this)}/>
                </div>
            </Col>
            <Col xs={1}>
                <div className={styles.goSearch}>
                    <Link to="/search">
                        <Icon name="arrow-right" size={'3x'} className={styles.arrow} onClick={this.searchForEvents.bind(this)} />
                    </Link>
                </div>
            </Col>
        </Col>
        );
    }
}

EventSearchHomeContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EventSearchHomeContainer)