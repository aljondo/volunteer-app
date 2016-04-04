import React, { Component } from 'react';
import Slider from 'react-slick';
import RequestingHours from './../VolunteerApproval/RequestingHours';
import RequestingAttend from './../VolunteerApproval/RequestingAttend';

class MultiItemCarousel extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll:3
        };
        return (
            <div className='container'>
                <Slider {...settings}>
                    <RequestingAttend />
                    <RequestingAttend />
                    <RequestingAttend />
                    <RequestingHours />
                </Slider>
            </div>
        );
    }
}

export default MultiItemCarousel

