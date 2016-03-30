import { connect } from 'react-redux'
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents";

function mapStateToProps(state) {
    return {
        events: state.events.featuredEvents }
}

export default connect(mapStateToProps)(FeaturedEvents)