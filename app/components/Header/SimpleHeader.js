import React, { Component } from 'react';
import {Grid, Row, Col, Button } from 'react-bootstrap'
import {Link} from 'react-router'
import styles from './simpleheader.scss'

const SimpleHeader = (props) => (
    <Row className={styles.header}>
        <Col sm={4} md={3} className={styles.logoDiv}>
            <img src={'/images/logo.jpg'}   className={styles.logo}/>
        </Col>
        <Col sm={8} md={7} mdOffset={2} className={styles.navDiv}>
            {props.isAuthenticated ? null :
            <div className={styles.signup}>
                <Link to="/register">
                    <Button bsSize="large" bsStyle="primary">Sign up</Button>
                </Link>
            </div> }
            <div className={styles.navList}>
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    {props.isAuthenticated ? <li> <Link to="/profile"> Profile </Link> </li> : null }
                    <li> <Link to="#"> About </Link> </li>
                    <li> <Link to="/search"> Search  </Link> </li>
                    {props.isAuthenticated ? null : <li> <Link to="/login"> Login </Link> </li> }
                    {props.isAuthenticated ? <li> <Link onClick={props.logoutUser} to="/"> Logout </Link> </li> : null }
                </ul>
            </div>
        </Col>
    </Row>
);

export default SimpleHeader;