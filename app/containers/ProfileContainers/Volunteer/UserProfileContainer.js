import React, { PropTypes, Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import styles from './userprofilecontainer.scss'
import AboutMeContainer from './UserAboutMeContainer'
import UpcomingEvents from '../../../components/ProfileComponents/Volunteer/EventDashboard/UpcomingEvents'
import EventHistory from '../../../components/ProfileComponents/Volunteer/EventDashboard/EventHistory'
import FeaturedEventsContainer from '../../FeaturedEventsContainer'
import ProfileChart from '../../../components/ProfileComponents/Volunteer/ProfileChart'

class UserProfileContainer extends Component {

    componentDidMount() {
        //TODO maybe use this
    }

    render() {
        return (
            <Grid className={styles.wrapper}>
                <Row>
                    <Col xs={12} sm={3} className={styles.aboutMe}>
                        <AboutMeContainer />
                    </Col>
                    <Col xs={12} sm={6}>
                        <h2> Hello there, {this.props.user.name} </h2>
                        <div>
                            <div>
                                <h1> Upcoming Events</h1>
                                <UpcomingEvents />
                            </div>
                        </div>
                        <div></div>
                        <div>
                            <h1> Past Events </h1>
                            <EventHistory />
                        </div>
                    </Col>
                    <Col xs={12} sm={3}>
                        <br/>
                        <FeaturedEventsContainer />
                        <h3>Hours</h3>
                        <br/>
                        <h3>All Time: 32</h3>
                        <br/>
                        <h3> Last Month: 6</h3>
                        <ProfileChart />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

UserProfileContainer.propTypes = {
    user: PropTypes.object.isRequired
};


const mapStateToProps = (state) => (
{
    user: state.auth.user
}
);

export default connect(mapStateToProps)(UserProfileContainer)
