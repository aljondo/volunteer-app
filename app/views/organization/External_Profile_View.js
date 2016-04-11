/**
 * Created by Shiyu on 4/2/2016.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import AboutContainer from '../../containers/OrganizationContainer/AboutContainer.js';
import Carousel from '../../components/Organization/Carousel.js'
class External_Profile_view extends Component {
    render() {
        return (
            <div >
            	<div><Carousel/></div>
                <div><AboutContainer orgId={this.props.params.orgId}/></div>
            </div>
            );
        }
    };
export default External_Profile_view;
