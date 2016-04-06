import React, { Component } from 'react';
import Slider from 'react-slick';
import './slick.css';
import RequestingHours from './../VolunteerApproval/RequestingHours';
import RequestingAttend from './../VolunteerApproval/RequestingAttend';

const MultiItemCarousel = (props) => {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll:3
        };
        console.log(props);
        return (
            <div>
                <Slider {...settings}>
                   { props.volunteers.map(function(volunteer) {
                         return <RequestingAttend volunteer={volunteer} />   
                        })
                    }
                </Slider>
            </div>
        );
}

export default MultiItemCarousel

