import React, { Component } from 'react';
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './registerSwitch.scss'

// a Login Form component
class RegisterSwitch extends Component {

    render() {
        return (
            <Grid>
                <Row className={styles.form}>
                    <Col xs={10} xsOffset={1}>
                        <form className="form-horizontal">
                            <Col sm={6} xs={10}>
                                <Button className={styles.userButton}
                                        onClick={this.props.onSelection.bind(null, "user")} block> Register as Volunteer </Button>
                            </Col>
                            <Col sm={6} xs={10}>
                                <Button className={styles.orgButton}
                                       onClick={this.props.onSelection.bind(null, "org")} block>Register as Organization</Button>
                            </Col>
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default RegisterSwitch
