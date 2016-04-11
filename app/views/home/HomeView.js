/**
 * Created by branden on 3/21/16.
 */
import React, { Component } from 'react';
import {Link} from 'react-router'
import HomeBlurb from '../../components/HomeBlurb/HomeBlurb'
import EventSearchForm from '../../components/EventSearchForm/EventSearchForm'
import HomeButtons from '../../components/HomeButtons/HomeButtons'
import styles from './homeview.scss'
import { Grid, Col, Row, Button  } from 'react-bootstrap'
import Icon from 'react-fa';

const HomePage = () => (
  <Row className={styles.homeView}>
    <Row className={styles.sectionOne}>
      <Grid>
        <Row className={styles.header}>
          <Col sm={6} md={3} className={styles.logoDiv}>
            <img src={'../../../static/images/logo.png'}   className={styles.logo}/>
          </Col>
          <Col sm={6} md={6} lgOffset={3} className={styles.navDiv}>
          <div className={styles.signup}>
            <Link to="/register">
              <Button bsSize="large" bsStyle="primary">Signup</Button>
            </Link>
          </div>
            <div className={styles.navList}>
              <ul>
                <li> <Link to="#"> About </Link> </li>
                <li> <Link to="#"> Search  </Link> </li>
                <li>  <Link to="/login"> Login </Link> </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lgOffset={3}>
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
          <Col sm={12} md={8} lgOffset={2} className={styles.search}>
            <Col sm={11} md={11}>
              <EventSearchForm />
            </Col>
            <Col sm={1} md={1} >
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
    <Row className={styles.footer}>
      <Grid>
        <Row className={styles.content}>
          <Col sm={6} md={3}>

          </Col>
        </Row>
        <Row className={styles.footerBar}>
          <Col sm={6} md={3}>
            <p className={styles.copyright}>
              &copy; Copyright 2016 - Americorps Boston
            </p>
          </Col>
          <Col sm={12} md={3} lgOffset={6} className={styles.socialmedia}>
            <Icon name="facebook-square" size={'2x'}/>
            <Icon name="twitter" size={'2x'}/>
            <Icon name="instagram" size={'2x'}/>
          </Col>
        </Row>
      </Grid>
    </Row>
  </Row>
)

export default HomePage
