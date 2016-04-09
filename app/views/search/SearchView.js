import React, { Component } from 'react';
import styles from './SearchView.scss'
import EventSearchContainer from '../../containers/EventSearchContainer'


class SearchView extends Component {

    render() {
        return (
            <div>
                <EventSearchContainer />
            </div>
        );
    }
    
}

export default SearchView