import React, { Component } from 'react';
import styles from './volunteerapproval.scss';
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap';
var classNames = require('classnames');
import MultiItemCarousel from '../MultiItemCarousel/MultiItemCarousel';


const VolunteerApproval = (props) => (

    <div className={styles.volApprovalWrapper}>
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
                            2/10
                        </Col>
                        <Col xs={12}>
                            Volunteers Approved
                        </Col>
                    </Row>
                </Panel>
                <Panel className={classNames(styles.bottom,'col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-12')}>
                    <div>
                        <MultiItemCarousel items={props.volunteers}/>
                    </div>
                </Panel>
            </Row>
        </Grid>
    </div>
);

export default VolunteerApproval