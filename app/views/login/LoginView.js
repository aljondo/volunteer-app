import React, { Component } from 'react';
import LoginForm from '../../containers/LoginFormContainer'
import styles from './login.scss'
import {Link} from 'react-router'
import SimpleHeaderContainer from '../../containers/Header/SimpleHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'
import { Grid, Col, Row, Button  } from 'react-bootstrap'

const LoginView = () => (
  <Row className={styles.wrapper}>
    <Row className={styles.imgBackground}>
      <Grid>
      <SimpleHeaderContainer />
      <Row className={styles.loginRow}>
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
    <FooterContainer addTopSection={true}/>
  </Row>
)

export default LoginView
