/**
 * Created by Shiyu on 4/9/2016.
 */
import React, { PropTypes, Component } from 'react'
import Carousel from "../components/Organization/Carousel";
import { fetchOrganizationImages } from "../actions/orgs";
import { connect } from 'react-redux'

class CarouselContainer extends Component {

    componentDidMount() {
        this.props.dispatch(
            fetchOrganizationImages()
        );
    }

    render() {
        return <Carousel images={this.props.images}/>
    }
}

CarouselContainer.propTypes = {
    images: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({images: state.images});

export default connect(mapStateToProps)(CarouselContainer)