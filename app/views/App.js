//Will be a view wrapper if any compents which are the same through out the application.
import React, { Component } from 'react';
import {Link} from 'react-router'
import NavBarContainer from '../containers/NavBarContainer'
require('bootstrap/dist/css/bootstrap.css');

class App extends Component {
    render() {
        return (
            <div>
                <NavBarContainer />
                {this.props.children}
            </div>
        );
    }
}

export default App
