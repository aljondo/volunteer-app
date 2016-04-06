import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './carousel.scss';

const MultiItemCarousel = (props) => {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div className={styles.container}>
                <Slider {...settings}>
                    {
                        props.items.map(function(item, index) {
                            return (<div key={index}>{item}</div>);
                        })
                    }
                </Slider>
            </div>
        )
};

export default MultiItemCarousel

