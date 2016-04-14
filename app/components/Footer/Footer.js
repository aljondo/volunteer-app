import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap'
import Icon from 'react-fa';
import styles from './footer.scss'

const Footer = (props) => (
    <Row className={styles.wrapper}>
        {props.addTopSection ?
        <Row className={styles.topSection}>
            <Col sm={12} md={7} lgOffset={4} smOffset={3} className={styles.topText}>
                <p>Americorps, helping the world one volunteer at a time.</p>
            </Col>
        </Row> : null}
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
);


export default Footer;