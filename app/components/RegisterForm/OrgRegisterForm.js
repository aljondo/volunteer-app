import React, { Component } from 'react';
import { Grid, Col, Row, Input, Button, Alert  } from 'react-bootstrap'
import styles from './register.scss'

const OrgRegisterForm = (props) => (
    <Grid>
        <div className={styles.title}>
            Create New Organization
            <span className={styles.requiredFields}>required fields</span>
        </div>
        <Row>
            <Col xs={10} xsOffset={1}>
                <form className="form-horizontal" >
                    <Row>
                        {props.errorMessage ?
                            <Alert  className="text-center col-xs-offset-3 col-xs-9" bsStyle="danger">
                                <h4>{props.errorMessage}</h4>
                            </Alert>
                            : null}
                        <Input type="text" label="Organization Name:"  placeholder="Enter Name" labelClassName="col-sm-3" wrapperClassName="col-sm-9"
                               onChange={props.nameChange} bsStyle={props.userData.name.valid ? 'success' : 'error'} />
                        <Input type="email" label="Email:"  placeholder="Enter Email" labelClassName="col-sm-3" wrapperClassName="col-sm-9"
                               onChange={props.emailChange} bsStyle={props.userData.email.valid ? 'success' : 'error'} />
                        <Input type="password" label="Password:" placeholder="Enter Password" labelClassName="col-sm-3" wrapperClassName="col-sm-9"
                               onChange={props.passwordChange} bsStyle={props.userData.password.valid ? 'success' : 'error'} />
                        <Input type="password" label="Verify Password:" placeholder="Verify Password" labelClassName="col-sm-3" wrapperClassName="col-sm-9"
                               onChange={props.verifyPasswordChange} bsStyle={props.userData.passwordVerify.valid ? 'success' : 'error'} />
                        <Input type="text" label="Phone:" placeholder="Enter phone number" labelClassName="col-sm-3" wrapperClassName="col-sm-9"
                               onChange={props.phoneChange} bsStyle={props.userData.phone.valid ? 'success' : 'error'} />
                        <Input type="text" label="Address:" placeholder="Enter Address" labelClassName="col-sm-3" wrapperClassName="col-sm-9"
                               onChange={props.addressChange} bsStyle={props.userData.address.valid ? null : 'error'} />
                        <Input type="text" label="City:" placeholder="Enter City" labelClassName="col-sm-3" wrapperClassName="col-sm-9"
                               onChange={props.cityChange} bsStyle={props.userData.city.valid ? null : 'error'} />
                        <Input type="select" label="State:" defaultValue="MA" onChange={props.stateChange} labelClassName="col-sm-3" wrapperClassName="col-sm-3">
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>
                        </Input>
                        <Input type="text" label="Zip Code:"  placeholder="Enter Zip Code" labelClassName="col-sm-3" wrapperClassName="col-sm-3"
                               onChange={props.zipChange} bsStyle={props.userData.zip.valid ? null : 'error'} />
                        <Input type="textarea" label="Mission:" placeholder="Enter company mission" labelClassName="col-sm-3" wrapperClassName="col-sm-9"
                               onBlur={props.missionChange}/>
                        <Input type="file" label="Images:" help="Images to appear on your profile" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                    </Row>
                    <Row className="form-group">
                        <Col sm={12} className="text-center">
                            <Button bsSize="large" bsStyle="primary" onClick={props.handleRegister} >Register</Button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    </Grid>
);

export default OrgRegisterForm