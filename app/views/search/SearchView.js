import React, { Component } from 'react';
import styles from './SearchView.scss'
import EventSearchContainer from '../../containers/EventSearchContainer'
import FullHeaderContainer from '../../containers/Header/FullHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'
import { Link } from 'react-router'

class SearchView extends Component {

    render() {
        return (
            <div>
                <FullHeaderContainer />
                <EventSearchContainer />
                <Link to="/event/1111">Event Details Example Link</Link>
                <Link to="/organization/5432">External Org Example Link</Link>
                <FooterContainer />
            </div>
        );
    }
    
}

export default SearchView