//Will be a view wrapper if any compents which are the same through out the application.
import React, { Component } from 'react';
import {Link} from 'react-router'
import NavBar from './navigation/NavBarView'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}

export default App
