import React, { Component } from 'react';
import styles from './register.scss'
import {Link} from 'react-router'
import { Grid, Col, Row, Button  } from 'react-bootstrap'
import RegisterSwitch from '../../components/RegisterForm/RegisterSwitch';
import UserRegisterFormContainer from '../../containers/UserRegisterFormContainer';
import OrgRegisterFormContainer from '../../containers/OrgRegisterFormContainer';
import SimpleHeaderContainer from '../../containers/Header/SimpleHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'
import Icon from 'react-fa';

class RegisterView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userType: null
        };

        // Bind callback methods to make `this` the correct context.
        this.handleSwitchClick = this.handleSwitchClick.bind(this);
        this.backToSwitch = this.backToSwitch.bind(this);
    }

    handleSwitchClick(userType, e){
        this.setState({
            userType: userType
        });
    }

    backToSwitch(){
        this.setState({
            userType: null
        });
    }

    render() {
        var pageContent;

        if(this.state.userType == "user") {
            pageContent = <UserRegisterFormContainer />;
        }
        else if (this.state.userType == "org"){
            pageContent = <OrgRegisterFormContainer />
        }
        else {
            pageContent = <RegisterSwitch onSelection={this.handleSwitchClick}/>;
        }

        return (
            <Row>
                <Row className={styles.imgBackground}>
                    <Grid>
                        <SimpleHeaderContainer />
                        <Row className={styles.registerPanel}>
                            { this.state.userType ? <Button className={styles.backButton} onClick={this.backToSwitch}><Icon name="arrow-left" size={'2x'}/></Button> : null  }
                            {pageContent}
                        </Row>
                    </Grid>
                </Row>
                <FooterContainer addTopSection={true}/>
            </Row>
        );
    }
}

export default RegisterView
