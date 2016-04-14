import React, { Component } from 'react';
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'
import styles from './loginForm.scss'

// a Login Form component
const LoginForm = (props) => (
  <form className={styles.login} >
    <Input type="email" id="email" onChange={props.emailChange} placeholder="Email"/>
    <Input type="password" id="password" onChange={props.passwordChange} placeholder="Password" />
    <Button bsSize="large" bsStyle="primary" onClick={props.handleLogin}>Login</Button>
   </form>
)

export default LoginForm
