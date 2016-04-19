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
                    <Col sm={4} xs={12}>
                        <img src={'../../../static/images/logo.jpg'} className={styles.logo}/>
                    </Col>
                    <Col sm={8} xs={12} className={styles.text}>
                        <Col xs={12} className={styles.title}>
                            Take the Americorps Pledge Today
                        </Col>
                        <Col xs={12} className={styles.pledge}>
                            "I will get things done for America - to make our people safer, smarter, and healthier.
                            I will bring Americans together to strengthen our communities.
                            Faced with apathy, I will take action.
                            Faced with conflict, I will seek common ground.
                            Faced with adversity, I will persevere.
                            I will carry this commitment with me this year and beyond.
                            I am an AmeriCorps member, and I will get things done."
                        </Col>
                    </Col>
                    <Col xs={12} className={styles.footerBar}>
                        <Col xs={12} sm={5}>
                            <p className={styles.copyright}>
                                &copy; Copyright 2016 - Americorps Boston
                            </p>
                        </Col>
                        <Col xs={12} sm={7} className={styles.socialmedia}>
                            <a href="https://www.facebook.com/americorps/">
                                <Icon name="facebook-square" size={'2x'}/>
                            </a>
                            <a href="https://twitter.com/americorps?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                                <Icon name="twitter-square" size={'2x'}/>
                            </a>
                            <a href="https://www.youtube.com/user/nationalservice">
                                <Icon name="youtube-square" size={'2x'}/>
                            </a>
                            <a href="https://www.linkedin.com/company/americorps">
                                <Icon name="linkedin-square" size={'2x'}/>
                            </a>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        </Row>
    </Row>
);


export default Footer;