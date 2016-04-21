import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './fullheader.scss'

const FullHeader = (props) => (
    <Row className={styles.header}>
        <Col sm={6} className={styles.navDiv}>
            <div className={styles.navList}>
                <ul>
                    <li className={props.route == "/" ? styles.activeLink : ""}>
                        <Link to="/"> Home </Link>
                    </li>
                    {props.isAuthenticated ?
                        <li className={props.route == "/profile" ? styles.activeLink : ""}>
                            <Link to="/profile"> Profile </Link>
                        </li> : null }
                    <li className={props.route == "/about" ? styles.activeLink : ""}>
                        <Link to="#"> About </Link>
                    </li>
                    <li className={props.route == "/search" ? styles.activeLink : ""}>
                        <Link to="/search"> Search </Link>
                    </li>
                    {props.isAuthenticated ?
                        null :
                        <li className={props.route == "/login" ? styles.activeLink : ""}>
                            <Link to="/login"> Login </Link>
                        </li> }
                    {props.isAuthenticated ?
                        <li>
                            <Link onClick={props.logoutUser} to="/"> Logout </Link>
                        </li> : null }
                </ul>
            </div>
        </Col>
        <Col xs={6} sm={2} className={styles.logoDiv}>
            <img src={'/images/logo.png'} className={styles.logo}/>
        </Col>
        <Col xs={6} sm={4} className={styles.rightText}>
            <p>Americorps Boston</p>
        </Col>
    </Row>
);

export default FullHeader;