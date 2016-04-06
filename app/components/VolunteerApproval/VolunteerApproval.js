import React, { Component } from 'react';
import './appro.css';
import styles from '../HourVerification/hourverification.scss';
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap';
var classNames = require('classnames');
import MultiItemCarousel from '../MultiItemCarousel/MultiItemCarousel';


const VolunteerApproval = (props) => (

    <div className={styles.wrapper}>
       <Grid>
           <Row>
               <Panel bsSize="large" className={classNames(styles.topLeft, 'col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-8')}>
                   <Row>
                       <Col xs={12} className={styles.topLeftTop}>
                           Cat Sitting for cats in need
                       </Col>
                       <Col xs={12}>
                           {props.event.name}
                       </Col>
                   </Row>
               </Panel>
               <Panel className={classNames(styles.topRight, 'col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-4')}>
                   <Row>
                       <Col xs={12}>
                           340/430
                       </Col>
                       <Col xs={12}>
                           Hours confirmed
                       </Col>
                   </Row>
               </Panel>
               <div className='col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-12'>
                  <MultiItemCarousel volunteers={props.volunteers} />
               </div>
           </Row>
       </Grid>
    </div>
);

export default VolunteerApproval