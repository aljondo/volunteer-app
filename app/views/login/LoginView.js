import React, { Component } from 'react';
import LoginForm from '../../containers/LoginFormContainer'
import styles from './login.scss'
import {Link} from 'react-router'
import NavBarContainer from '../../containers/NavBarContainer'
import { Grid, Col, Row, Button  } from 'react-bootstrap'

const LoginView = () => (
  <Row className={styles.imgBackground}>
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
      <Col sm={8} md={4} mdOffset={4} smOffset={2} className={styles.loginPanel}>
        <div className={styles.heading}>
          <h2> Welcome </h2>
        </div>
        <h3 className={styles.subHeading}> Sign in to continue. </h3>
        <div  className={styles.loginForm}> <LoginForm/> </div>
        <h3 className={styles.needAccount}> {"Don't have and account?"}  <Link to="/register">Signup</Link> </h3>
      </Col>
    </Row>
    </Grid>
  </Row>
)

export default LoginView
