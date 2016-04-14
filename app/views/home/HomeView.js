/**
 * Created by branden on 3/21/16.
 */
import React, { Component } from 'react';
import {Link} from 'react-router'
import HomeBlurb from '../../components/HomeBlurb/HomeBlurb'
import EventSearchForm from '../../components/EventSearchForm/EventSearchForm'
import HomeButtons from '../../components/HomeButtons/HomeButtons'
import SimpleHeaderContainer from '../../containers/Header/SimpleHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'
import styles from './homeview.scss'
import { Grid, Col, Row, Button  } from 'react-bootstrap'
import Icon from 'react-fa';

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
        <Row>
          <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2} className={styles.search}>
            <Col xs={11}>
              <EventSearchForm />
            </Col>
            <Col xs={1}>
              <div className={styles.goSearch}>
               <Icon name="arrow-right" size={'3x'} className={styles.arrow}/>
              </div>
            </Col>
          </Col>
        </Row>
        <Row >
          <Col sm={12} md={6} className={styles.leftpanel}>
          </Col>
          <Col sm={12} md={6} className={styles.rightpanel}>
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
              <Button bsSize="large" bsStyle="primary" className={styles.orgbutton}>Register Organization</Button>
          </Col>
      </Grid>
    </Row>
    <FooterContainer />
  </Row>
);

export default HomePage
