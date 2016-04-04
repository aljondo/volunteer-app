import React, { Component } from 'react';
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'
import styles from './register.scss'

const OrgRegisterForm = (props) => (
    <Grid>
        <div className={styles.title}>
            Create New Organization
        </div>
        <Row>
            <Col xs={10} xsOffset={1}>
                <form className="form-horizontal" >
                    <Row>
                        <Input type="text" id="name" label="Organization Name:"  placeholder="Enter Name" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                        <Input type="email" id="email" label="Primary Contact:"  placeholder="Enter Email" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                        <Input type="password" id="password" label="Password:" placeholder="Enter Password" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                        <Input type="password" id="password2" label="Verify Password:" placeholder="Verify Password" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                        <Input type="select" label="Select" placeholder="select" labelClassName="col-sm-3" wrapperClassName="col-sm-9">
                            <option value="Location:">Select Location</option>
                            <option value="northEnd">North End</option>
                            <option value="southEnd">South End</option>
                            <option value="cambridge">Cambridge</option>
                            <option value="roxbury">Roxbury</option>
                        </Input>
                        <Input type="textarea" label="Mission:" placeholder="Enter company mission" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                        <Input type="file" label="Images:" help="Images to appear on your profile" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                    </Row>
                    <Row className="form-group">
                        <Col sm={12} className="text-center">
                            <Button bsSize="large" bsStyle="primary" type="submit" >Register</Button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    </Grid>
);

export default OrgRegisterForm