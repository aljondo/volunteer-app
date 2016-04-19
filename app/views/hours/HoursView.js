import React, { Component } from 'react';
import {Link} from 'react-router';
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap'
import HoursFilterContainer from '../../containers/HoursFilterContainer/HoursFilterContainer';
import FullHeaderContainer from '../../containers/Header/FullHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'

class HoursView extends Component {
    render() {
        return (
            <div>
            <FullHeaderContainer />
            <HoursFilterContainer />
            <FooterContainer />
            </div>
        );
    }
}

export default HoursView
