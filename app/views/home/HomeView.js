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
  <Row className={styles.homeView}>
    <Row className={styles.sectionOne}>
      <Grid>
        <SimpleHeaderContainer />
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <Row className={styles.heading}>
              <h1> Volunteer Today </h1>
              </Row>
              <Row className={styles.subHeading}>
                <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum. Sed a sapien imperdiet metus mattis dictum vel vitae felis sagittis.</h3>
                </Row>
          </Col>
        </Row>
      </Grid>
    </Row>
    <Row className={styles.sectionTwo}>
      <Grid>
        <Row className={styles.search}>
          <EventSearchContainer homePage={true} icon="arrow-right"/>\
        </Row>
        <Row >
          <Col sm={12} md={6} className={styles.leftpanel}>
            <div className={styles.holdinfo}>
              <FeaturedEventsContainer />
            </div>
          </Col>
          <Col sm={12} md={6} className={styles.rightpanel}>
              <div className={styles.holdinfo}>
                  <table className = "table">
                      <thead>
                      <tr>
                          <th>
                              <h3>Tweet Tweet</h3>
                          </th>
                      </tr>
                      </thead>
                      <tbody>
                      </tbody>
                  </table>
                  <a className="twitter-timeline"
                     href="https://twitter.com/exampleid2"
                     data-widget-id="722277701743194112"
                     data-chrome="transparent noborders nofooter noheader"></a>
                  <Twitter/>
              </div>
          </Col>
        </Row>
      </Grid>
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
  </Row>
);

export default HomePage
