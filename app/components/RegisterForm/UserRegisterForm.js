import React, { Component, PropTypes } from 'react';
import styles from './register.scss'
import { Grid, Col, Row, Input, Button, FormControls, Alert } from 'react-bootstrap'

const UserRegisterForm = (props) => (
  <Grid>
      <Row>
          <Col xsOffset={1} xs={9} className={styles.formWrapper}>
              <div className={styles.heading}>
                  <h2>Create New Volunteer Account</h2>
                  <h3>*required fields</h3>
              </div>
              <form className="form-horizontal" >
                  <Row>
                      {props.errorMessage ?
                              <Alert  className="text-center col-xs-offset-3 col-xs-9" bsStyle="danger">
                                  <h4>{props.errorMessage}</h4>
                              </Alert>
                          : null}
                      <Input type="text" label="First Name:"  placeholder="Enter Name" labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0"
                             onChange={props.nameChange} bsStyle={props.userData.name.valid ? 'success' : 'error'} />
                      <Input type="email" label="Email:" placeholder="Enter Email" labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0"
                             onChange={props.emailChange} bsStyle={props.userData.email.valid ? 'success' : 'error'} />
                      <Input type="password" label="Password:" placeholder="Enter Password" labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0"
                             onChange={props.passwordChange} bsStyle={props.userData.password.valid ? 'success' : 'error'} />
                      <Input type="password" label="Verify Password:" placeholder="Verify Password" labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0"
                             onChange={props.verifyPasswordChange} bsStyle={props.userData.passwordVerify.valid ? 'success' : 'error'} />
                      <Input type="text" label="Phone:" placeholder="Enter phone number" labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0"
                             onChange={props.phoneChange} bsStyle={props.userData.phone.valid ? 'success' : 'error'} />
                      <Input type="select" label="Gender:" onChange={props.genderChange} labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0">
                          <option value="">N/A</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                      </Input>
                      <Input type="select" label="Birth Year:" labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0"
                             onChange={props.birthYearChange} bsStyle={props.userData.birthdate.valid ? null : 'error'} >
                          <option value="">N/A</option>
                          {function(){
                              var result = [];
                              for (var i=1900; i <= 2017; i++) {
                                  result.push(i);
                              }
                              return result.map(function (x, i) {
                                  return <option value={result[i]} key={result[i]}>{result[i]}</option>;
                              })
                          }()}
                      </Input>
                      <Input type="select" label="Birth Month:" labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0"
                             onChange={props.birthMonthChange} bsStyle={props.userData.birthdate.valid ? null : 'error'} >
                          <option value="">N/A</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                      </Input>
                      <Input type="select" label="Birth Day:" labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0"
                             onChange={props.birthDayChange} bsStyle={props.userData.birthdate.valid ? null : 'error'} >
                          <option value="">N/A</option>
                          {function(){
                              var result = [];
                              for (var i=1; i <= 31; i++) {
                                  result.push(i);
                              }
                              return result.map(function (x, i) {
                                  return <option value={result[i]} key={result[i]}>{result[i]}</option>;
                              })
                          }()}
                      </Input>
                      <Input type="select" label="Education:" onChange={props.educationChange} labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0">
                          <option value="">N/A</option>
                          <option value="lesshigh">Less than High School</option>
                          <option value="highschool">High School diploma or equivalent</option>
                          <option value="somecoll">Some college, no degree</option>
                          <option value="postsec">Postsecondary non-degree award</option>
                          <option value="associate">Associate's degree</option>
                          <option value="bachelor">Bachelor's degree</option>
                          <option value="master">Master's degree</option>
                          <option value="doctoral">Doctoral or professional degree</option>
                      </Input>
                      <Input type="select" label="Location:" onChange={props.locationChange} labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0">
                          <option value="">N/A</option>
                          <option value="allston">Allston</option>
                          <option value="backbay">Back Bay</option>
                          <option value="bayvillage">Bay Village</option>
                          <option value="beacon">Beacon Hill</option>
                          <option value="brighton">Brighton</option>
                          <option value="charlestown">Charlestown</option>
                          <option value="chinatown">Chinatown / Leather District</option>
                          <option value="dorchester">Dorchester</option>
                          <option value="downtown">Downtown</option>
                          <option value="eastboston">East Boston</option>
                          <option value="fenwaykenmore">Fenway Kenmore</option>
                          <option value="hyde">Hyde Park</option>
                          <option value="jamaica">Jamaica Plain</option>
                          <option value="mattapan">Mattapan</option>
                          <option value="middorchester">Mid Dorchester</option>
                          <option value="missionhill">Mission Hill</option>
                          <option value="northend">North End</option>
                          <option value="roslindale">Roslindale</option>
                          <option value="roxbury">Roxbury</option>
                          <option value="southboston">South Boston</option>
                          <option value="southend">South End</option>
                          <option value="westend">West End</option>
                          <option value="westroxbury">West Roxbury</option>
                          <option value="greater">Greater Boston Area / Outside City</option>
                      </Input>
                      {/* Skills checkboxes */}
                      <Col sm={3} xs={10} xsOffset={1} smOffset={0} className={styles.checkboxLabel}>
                          <FormControls.Static label="Skills:"/>
                      </Col>
                      <Col xs={3} smOffset={0} xsOffset={2}>
                          <Input type="checkbox" onChange={props.skillsChange} value="public" label="Public Relations/Speaking"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="teaching" label="Teaching/Tutoring"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="it" label="IT/Computer"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="administrative" label="Administrative"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="legal" label="Legal"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="management" label="Management"/>
                      </Col>
                      <Col xs={5} xsOffset={1}>
                          <Input type="checkbox" onChange={props.skillsChange} value="handiwork" label="Handiwork"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="arts" label="Fine Arts"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="language" label="Foreign Language"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="tefl" label="TEFL/TESOL"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="writing" label="Writing/Editing"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="event" label="Event Planning"/>
                          <Input type="checkbox" onChange={props.skillsChange} value="sports" label="Sports/Recreation"/>
                      </Col>
                      {/* Interests checkboxes */}
                      <Col sm={3} xs={10} xsOffset={1} smOffset={0} className={styles.checkboxLabel}>
                          <FormControls.Static label="Interests:"/>
                      </Col>
                      <Col xs={3} smOffset={0} xsOffset={2}>
                          <Input type="checkbox" onChange={props.interestsChange} value="mentoring" label="Mentoring"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="education" label="Education"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="animals" label="Animals"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="domestic" label="Domestic Violence"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="youth" label="Youth"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="health" label="Health"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="arts" label="Arts and Culture"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="financialemp" label="Financial Empowerment"/>
                      </Col>
                      <Col xs={5} xsOffset={1}>
                          <Input type="checkbox" onChange={props.interestsChange} value="seniors" label="Seniors"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="disabilities" label="People with Disabilities"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="hunger" label="Hunger"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="lgbt" label="Lesbian, gay, bisexual, transgender"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="homeless" label="Homeless/Housing"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="immigration" label="Immigration"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="veterans" label="Veterans"/>
                          <Input type="checkbox" onChange={props.interestsChange} value="environment" label="Environment/Sustainability"/>
                      </Col>
                      <Input type="textarea" label="Bio:" placeholder="Enter bio" labelClassName="col-sm-3 col-xs-10 col-xs-offset-1 col-sm-offset-0" wrapperClassName="col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0"
                             onBlur={props.bioChange}/>
                      {/* Contact with opportunities Radio */}
                      <Col md={4} mdOffset={3} xsOffset={1} xs={6}>
                          <FormControls.Static label="Contact me with opportunities:"/>
                      </Col>
                      <Col md={1} xs={2}>
                          <Input type="radio" label="Yes" value={true}
                                 onChange={props.contactChange} checked={props.userData.contact.value}/>
                      </Col>
                      <Col xs={1}>
                          <Input type="radio" label="No" value={false}
                                 onChange={props.contactChange} checked={!props.userData.contact.value}/>
                      </Col>
                  </Row>
                  <Row className="form-group">
                      <Col sm={12} className="text-center">
                          <Button className={styles.button} bsSize="large" onClick={props.handleRegister}>Register</Button>
                      </Col>
                  </Row>
              </form>
          </Col>
      </Row>
  </Grid>
);

export default UserRegisterForm
