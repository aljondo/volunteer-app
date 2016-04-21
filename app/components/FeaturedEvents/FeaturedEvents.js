import React from 'react'
import {  Row, Col } from 'react-bootstrap'
import Icon from 'react-fa';
import { Link } from 'react-router'
import styles from './featuredevents.scss'

const FeaturedEvents = (props) => (
    <Col xs={12}>
        <Col xs={12}>
            <h3>Featured Events</h3>
        </Col>
        <Col xs={12}className={styles.searchResults}>
            {genEventList(props.events)}
        </Col>
    </Col>
);

const genEventList = (events) => (
    events.map((event, index) => (
        <Col key={index} xs={10} xsOffset={1} className={styles.col}>
            <Col xs={12} className={styles.results}>
                <Col xs={12} className={styles.name}>
                    {event.name}
                </Col>
                <Col xs={12} className={styles.bottomWrapper}>
                    <Col xs={9} className={styles.date}>
                        <div className={styles.text}>
                            {event.start_at.split(/[ \-\:]+/).splice(0,3).reverse().join("/")}
                        </div>
                    </Col>
                    <Col xs={3} className={styles.detailsBtnCol}>
                        <Link to={"/event/" + event.id}>
                            <Icon className={styles.detailsBtn} name='info' size={'2x'}/>
                        </Link>
                    </Col>
                </Col>
            </Col>
        </Col>
    ))
);

export default FeaturedEvents
