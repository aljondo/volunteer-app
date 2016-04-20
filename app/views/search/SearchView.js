import React, { Component } from 'react';
import styles from './SearchView.scss'
import EventSearchContainer from '../../containers/EventSearchContainer'
import FullHeaderContainer from '../../containers/Header/FullHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'
import { Link } from 'react-router'
import { Col, Row, Grid } from 'react-bootstrap'


class SearchView extends Component {

    render() {
        return (
            <Grid className={styles.searchGrid}>
                <FullHeaderContainer />
                <Row>
                    <Col xs={12}>
                        <h1>Find an Event</h1>
                    </Col>
                </Row>
                <EventSearchContainer />
                <Link to="/event/1111">Event Details Example Link</Link>
                <Link to="/organization/5432">External Org Example Link</Link>
                <FooterContainer />
            </Grid>
        );
    }
    
}

export default SearchView