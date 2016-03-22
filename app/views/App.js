//Will be a view wrapper if any compents which are the same through out the application.
import React, { Component } from 'react';
import {Link} from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                Americorps
                <header>
                    {' '}
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="profile">Profile</Link>
                    {' '}
                    <Link to="search">Search</Link>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default App
