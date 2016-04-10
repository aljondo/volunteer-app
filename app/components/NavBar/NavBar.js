import React, { Component } from 'react';
import {Link} from 'react-router'
import { Row, Col } from 'react-bootstrap'
import styles from './navbar.scss'

const NavBar = (props) => (<div>
        <header>
            <Row className={styles.top}>
                <Col sm={8} className={styles.topLeftCol}>
                    <div>
                        <img className={styles.logoIcon}
                             src="http://www.nationalservice.gov/sites/default/files/documents/ac_0.png"/>
                        <span className={styles.logo}>Americorps</span>
                    </div>
                </Col>
                <Col sm={4} className={styles.topRightCol}>
                    <div>
                        <div className={styles.topRightLinks}>
                            { props.isAuthenticated ? null : <Link className={styles.link} to="/register">Register</Link> }
                            { props.isAuthenticated ? <Link className={styles.link} onClick={props.logoutUser} to="/">Logout</Link> : null }
                            { props.isAuthenticated ? null : <Link className={styles.link} to="/login">Login</Link> }
                            <Link className={styles.link} to="#">About</Link>
                        </div>
                        <div className={styles.topRightIcons}>
                            <a href="https://www.facebook.com/americorps/">
                                <img className={styles.icon}
                                     src="/app/static/facebook_navbar_icon.svg"/>
                            </a>
                            <a href="https://twitter.com/americorps">
                                <img className={styles.icon}
                                     src="/app/static/twitter_navbar_icon.svg"/>
                            </a>
                            <a href="https://www.instagram.com/americorps/">
                                <img className={styles.icon}
                                     src="/app/static/instagram_navbar_icon.svg"/>
                            </a>
                            <a href="https://www.youtube.com/user/nationalservice">
                                <img className={styles.icon}
                                     src="/app/static/youtube_navbar_icon.svg"/>
                            </a>
                            <a href="https://www.linkedin.com/company/americorps">
                                <img className={styles.icon}
                                     src="/app/static/linkedin_navbar_icon.svg"/>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className={styles.bottom}>
                <div className={styles.links}>
                    <Link className={styles.link} to="/">Home</Link>
                    <Link className={styles.link} to="/profile">Profile</Link>
                    <Link className={styles.link} to="/search">Search</Link>
                </div>
            </div>
        </header>
    </div>);

export default NavBar