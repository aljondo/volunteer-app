import React, { Component, PropTypes } from 'react';
import styles from './register.scss'
import { Grid, Col, Row, Input, Button, FormControls } from 'react-bootstrap'

// a Login Form component
class UserRegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                "email": null,
                "password": null,
                "password2": null,
                "gender": null,
                "age": null,
                "location": null,
                "skills": [],
                "interests": [],
                "bio": null,
                "contact": true
            },
            errorMessage: null
        };
        // Bind callback methods to make `this` the correct context.
        this.handleRegister = this.handleRegister.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.verifyPasswordChange = this.verifyPasswordChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            errorMessage: null
        });
    }

    checkForm() {
        if (!this.state.formData.email) {
            this.setState({
                errorMessage: "please enter an email"
            });
            console.log(this.state);
            return false;
        }
        if (!this.state.formData.password) {
            this.setState({
                errorMessage: "please enter a password"
            });
            return false;
        }
        if (!this.state.formData.password2) {
            this.setState({
                errorMessage: "please verify your password"
            });
            return false;
        }
        if (this.state.formData.password !== this.state.formData.password2) {
            this.setState({
                errorMessage: "passwords do not match"
            });
            return false;
        }
        return true;
    }

    handleRegister() {
        this.setState({
            errorMessage: null
        });
        if (this.checkForm()) {
            var newUser = Object.assign({}, this.state.formData);
            delete newUser.password2;
            this.props.saveUser(newUser)
                .then(function (response) {
                    if (response.type == 'SAVE_USER_SUCCESS') {
                        console.log("successful request");
                        this.props.pushRoute('/profile');
                    }
                    else {
                        console.log("Request to saveUser failed");
                    }
                }.bind(this));
        }
    }

    emailChange(e) {
        var newState = this.state;
        newState.formData.email = e.target.value;
        this.setState(newState);
    }

    passwordChange(e) {
        var newState = this.state;
        newState.formData.password = e.target.value;
        this.setState(newState);
    }

    verifyPasswordChange(e) {
        var newState = this.state;
        newState.formData.password2 = e.target.value;
        this.setState(newState);
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
                                <Input type="email" label="Email:" onChange={this.emailChange} placeholder="Enter Email" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                                <Input type="password" label="Password:" onChange={this.passwordChange} placeholder="Enter Password" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
                                <Input type="password" label="Verify Password:" onChange={this.verifyPasswordChange} placeholder="Verify Password" labelClassName="col-sm-3" wrapperClassName="col-sm-9"/>
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
                                {this.state.errorMessage ?
                                    <Col sm={12} className="text-center">{this.state.errorMessage}</Col>
                                    : null}
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

export default UserRegisterForm

