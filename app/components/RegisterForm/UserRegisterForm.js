import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { saveUser } from '../../actions/users'
import styles from './register.scss'
import { Grid, Col, Row, Input, Button, FormControls } from 'react-bootstrap'

// a Login Form component
class UserRegisterForm extends Component {

    constructor(props) {
        super(props);

        // Bind callback methods to make `this` the correct context.
        this.handleRegister = this.handleRegister.bind(this);
        this.emailChange = this.emailChange.bind(this);
    }

    handleRegister() {
        this.props.formData.id = 3121213;
        this.props.saveUser(this.props.formData)
            .then(function(response){
                if(response.response.type == 'SAVE_USER_SUCCESS'){
                    //do something
                }
                else {
                    //do something else
                }
            });
    }

    emailChange(e){
        this.props.formData.email = e.target.value;
    }

    passwordChange(e){
        this.props.formData.password = e.target.value;
    }

    render() {
        return (
            <Grid>
                <div className={styles.title}>
                    Create New Volunteer Account
                </div>
                <Row>
                    <Col xs={10} xsOffset={1}>
                        <form className="form-horizontal" >
                            <Row>
                                <Input type="email" ref="email" label="Email:" onChange={this.emailChange.bind(this)} placeholder="Enter Email" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                                <Input type="password" ref="password" label="Password:" onChange={this.passwordChange.bind(this)} placeholder="Enter Password" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                                <Input type="password" ref="password2" label="Verify Password:" placeholder="Verify Password" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                                <Input type="select" label="Gender:" placeholder="Select Gender" labelClassName="col-sm-3" wrapperClassName="col-sm-3">
                                    <option value="male:">Male</option>
                                    <option value="female">Female</option>
                                </Input>
                                <Input type="select" label="Age:" placeholder="Select Age" labelClassName="col-sm-3" wrapperClassName="col-sm-3">
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                </Input>
                                <Input type="select" label="Location:" placeholder="Select Location" labelClassName="col-sm-3" wrapperClassName="col-sm-9">
                                    <option value="northEnd">North End</option>
                                    <option value="southEnd">South End</option>
                                    <option value="cambridge">Cambridge</option>
                                    <option value="roxbury">Roxbury</option>
                                </Input>
                                {/* Skills checkboxes */}
                                <Col sm={3} xs={12} className={styles.checkboxLabel}>
                                    <FormControls.Static label="Skills:"/>
                                </Col>
                                <Col xs={4} xsOffset={1}>
                                    <Input type="checkbox" label="Public Relations / Speaking"/>
                                    <Input type="checkbox" label="Teaching / Tutoring"/>
                                    <Input type="checkbox" label="IT / Computer"/>
                                </Col>
                                <Col xs={4}>
                                    <Input type="checkbox" label="Coaching / Mentoring"/>
                                    <Input type="checkbox" label="TEFL / TESOL"/>
                                    <Input type="checkbox" label="Writing / Editing"/>
                                </Col>
                                {/* Interests checkboxes */}
                                <Col sm={3} xs={12} className={styles.checkboxLabel}>
                                    <FormControls.Static label="Interests:"/>
                                </Col>
                                <Col xs={4} xsOffset={1}>
                                    <Input type="checkbox" label="Health"/>
                                    <Input type="checkbox" label="Arts and Culture"/>
                                    <Input type="checkbox" label="Financial Empowerment"/>
                                </Col>
                                <Col xs={4}>
                                    <Input type="checkbox" label="Immigration"/>
                                    <Input type="checkbox" label="Veterans"/>
                                    <Input type="checkbox" label="Environment / Sustainability"/>
                                </Col>
                                <Input type="textarea" label="Bio:" placeholder="Enter bio" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                                {/* Contact with opportunities Radio */}
                                <Col sm={5} smOffset={3} xs={12}>
                                    <FormControls.Static label="Contact me with opportunities:"/>
                                </Col>
                                <Col xs={2}>
                                    <Input type="radio" label="Yes"/>
                                </Col>
                                <Col xs={2}>
                                    <Input type="radio" label="No"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col sm={12} className="text-center">
                                    <Button bsSize="large" onClick={this.handleRegister} bsStyle="primary">Register</Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

UserRegisterForm.propTypes = {
    formData: PropTypes.object.isRequired
};

UserRegisterForm.defaultProps = {
    formData: {}
};

export default UserRegisterForm

