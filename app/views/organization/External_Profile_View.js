import React, { Component } from 'react';
import {Link} from 'react-router';
import ExternalOrganizationContainer from '../../containers/OrganizationContainer/ExternalOrganizationContainer.js';
import Carousel from '../../components/Organization/Carousel.js'
class External_Profile_view extends Component {
    render() {
        return (
            <div >
            	<div><Carousel/></div>
                <div><ExternalOrganizationContainer/></div>
            </div>
            );
        }
    };
export default External_Profile_view;
