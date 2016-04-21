/**
 * Created by branden on 3/21/16.
 */
import React, { Component } from 'react';
import {Link} from 'react-router'
import HomeBlurb from '../../components/HomeBlurb/HomeBlurb'
import EventSearchContainer from '../../containers/EventSearchContainer'
import HomeButtons from '../../components/HomeButtons/HomeButtons'
import SimpleHeaderContainer from '../../containers/Header/SimpleHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'
import styles from './homeview.scss'
import FeaturedEventsContainer from '../../containers/FeaturedEventsContainer'
import { Grid, Col, Row, Button  } from 'react-bootstrap'


//The twitter feed must be personalized via settings -> widgets in the twitter profile current size @ 400px
const Twitter = () => (

    <a href="https://twitter.com/your-twitter-page"
       className="twitter-follow-button"
       data-show-count="false"
       data-show-screen-name="false"
        >
    </a>
)
const HomePage = () => (
  <div className={styles.homeView}>
    <Row className={styles.sectionOne}>
      <Grid>
        <SimpleHeaderContainer />
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <Row className={styles.heading}>
              <h1> Volunteer Today </h1>
              </Row>
              <Row className={styles.subHeading}>
                <h3> We are a civil society program supported by the U.S. federal government, foundations, and other donors engaging adults in involved public service work with a goal of helping others and the community.</h3>
                </Row>
          </Col>
        </Row>
      </Grid>
    </Row>
    <Row className={styles.sectionTwo}>
        <Row className={styles.search}>
          <EventSearchContainer homePage={true} icon={"arrow-right"}/>
        </Row>
        <Row className={styles.dashboard}>
          <Col xs={10} xsOffset={1} md={5} mdOffset={1} className={styles.holdinfo}>
              <FeaturedEventsContainer />
          </Col>
          <Col xs={10} xsOffset={1} md={4} mdOffset={1} className={styles.holdinfo}>
              <h3 className={styles.twitterTitle}>Tweet Tweet</h3>
              <a className="twitter-timeline"
                 href="https://twitter.com/exampleid2"
                 data-widget-id="722277701743194112"
                 data-chrome="transparent noborders nofooter noheader"></a>
              <Twitter/>
          </Col>
        </Row>
    </Row>
    <Row className={styles.sectionThree}>
      <Grid>
          <Col sm={12} md={7} lgOffset={1} className={styles.orgtext}>
            <p> Are you an organization looking for volunteers?</p>
          </Col>
          <Col sm={12} md={3}>
              <Link to="/register">
                  <Button bsSize="large" bsStyle="primary" className={styles.orgbutton}>Sign Up</Button>
              </Link>
          </Col>
      </Grid>
    </Row>
    <FooterContainer />
  </div>
);

export default HomePage
