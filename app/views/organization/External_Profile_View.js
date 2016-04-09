import React, { Component } from 'react';
import {Link} from 'react-router';
import AboutContainer from '../../containers/OrganizationContainer/AboutContainer.js';
import Carousel from '../../components/Organization/Carousel.js'
class External_Profile_view extends Component {
    render() {
        return (
            <div >
            	<div><Carousel/></div>
                <div><AboutContainer/></div>
            </div>
            );
        }
    };
export default External_Profile_view;
