import React, { Component } from 'react';
import styles from './register.scss'
import {Link} from 'react-router'
import { Button } from 'react-bootstrap'
import RegisterSwitch from '../../components/RegisterForm/RegisterSwitch'
import UserRegisterFormContainer from '../../containers/UserRegisterFormContainer'
import OrgRegisterFormContainer from '../../containers/OrgRegisterFormContainer'

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
            <div className={styles.viewWrapper}>
                <div className={styles.header}>
                    { this.state.userType ? <Button className={styles.backButton} onClick={this.backToSwitch}>Back</Button> : null  }
                    { this.state.userType ? null : <div>Register</div> }
                </div>
                <div>
                    {pageContent}
                </div>
            </div>
        );
    }
}

export default RegisterView
