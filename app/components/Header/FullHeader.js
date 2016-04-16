import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './fullheader.scss'

const FullHeader = (props) => (
    <Row className={styles.header}>
        <Col sm={5} md={5} className={styles.navDiv}>
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
        <Col sm={1} md={1} className={styles.logoDiv}>
            <img src={'../../../static/images/logo.png'} className={styles.logo}/>
        </Col>
        <Col sm={3} md={3} className={styles.rightText}>
            <p>Americorps Boston</p>
        </Col>
    </Row>
);

export default FullHeader;