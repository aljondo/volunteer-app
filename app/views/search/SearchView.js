import React, { Component } from 'react';
import NavBarSearch from '../../components/NavBarSearch/NavBarSearch'
import CategoryLocationForm from '../../components/CategoryLocationForm/CategoryLocationForm'
import AdvancedSearch from '../../components/AdvancedSearch/AdvancedSearch'
import SearchResult from '../../components/SearchResult/SearchResult'
import SearchButton from '../../components/SearchButton/SearchButton'
import styles from './SearchView.scss'
import {Link} from 'react-router'

class SearchView extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            advancedSearch : false
        };
    }

    renderActionSection() {
        if(this.state.advancedSearch) {
            return(
                <AdvancedSearch />
                )
        };
        return;
    }   

    render() {
        return (
            <div className={styles.search}>
                <h1 className={styles.title}>Find an Event</h1>
                <div className={styles.clprompt}>
                    <CategoryLocationForm />
                    <div className={styles.prompt}>
                        <SearchButton />
                    </div>
                </div>
                <a onClick={this.onAdvancedClick.bind(this)}>Advanced Search</a>
                { this.state.advancedSearch ? <AdvancedSearch /> : null }
            </div>
        );
    }

    onAdvancedClick() {
        if(!this.state.advancedSearch) {
            this.setState({ advancedSearch: true});
        }
        else {
            this.setState({ advancedSearch: false});
        }
    }
    
}

export default SearchView