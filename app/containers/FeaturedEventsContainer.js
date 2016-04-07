import React, { PropTypes, Component } from 'react'
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents";
import { fetchFeaturedEvents } from "../actions/events/featuredEventsActions";
import { connect } from 'react-redux'

class FeaturedEventsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(
      fetchFeaturedEvents()
    );
  }

  render() {
    return <FeaturedEvents events={this.props.events}/>
  }
}

FeaturedEventsContainer.propTypes = {
  events: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({events: state.featuredEvents.events});

export default connect(mapStateToProps)(FeaturedEventsContainer)
