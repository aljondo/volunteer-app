import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSearchEvents, resetSearchEvents } from "../../actions/events/searchEventsActions";
import { fetchUsers } from '../../actions/users'
import { push as pushRoute } from 'react-router-redux';
import EventSearchResults from '../../components/EventSearchResults/EventSearchResults'
import ProfileChart from '../../components/ProfileComponents/Volunteer/ProfileChart';
import {Button, ButtonGroup, Input, FormControls, Grid, Row, Col} from 'react-bootstrap'
import styles from './hoursfiltercontainer.scss'

//import VolunteerHoursAdmin from '../../components/ProfileAdminViewButtons/VolunteerHoursAdmin'
//import styles from './profileadminviewbuttons.scss'

//Displays a user's hours
const neighborhoods = [
       "Roxbury",
       "Beacon Hill",
       "Back Bay",
       "South Boston"
];

class HoursFilterContainer extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            filter : "none"
        };
    }

    componentDidMount() {
        if (this.props.events.length > 0){
            this.props.fetchSearchEvents();
        }
    }

    componentWillUnmount(){
        this.props.resetSearchEvents();
    }

    searchForEvents() {
        this.props.fetchSearchEvents();
    }

    setNoneState() {
      this.setState({ filter: "none" });
    }

    setInterestsState() {
      this.setState({ filter: "interests" });
    }

    setSkillsState() {
      this.setState({ filter: "skills" });
    }

    setTimeState() {
      this.setState({ filter: "time" });
    }

    setLocState() {
      this.setState({ filter: "location" });
    }

  renderFilterSection() {
    if(this.state.filter === "none") {
      return(
        <div></div>
        )
    }
    else if(this.state.filter === "location") {
      return(
        <Input type="select" placeholder="Location">
          <option value="roxbury">Roxbury</option>
          <option value="beaconhill">Beacon Hill</option>
          <option value="backbay">Back Bay</option>
          <option value="southboston">South Boston</option>
        </Input>
        )
    }
    else if(this.state.filter === "time") {
      return(
        <div>
          <form className="form-horizontal">
              <Input type="select" label="Year:" labelClassName="col-xs-1" wrapperClassName="col-xs-2">
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
              </Input>
              <Input type="select" label="Month:" labelClassName="col-xs-1" wrapperClassName="col-xs-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
              </Input>
            </form>
        </div>
        )
    }
    else if(this.state.filter === "skills") {
      return(
      <div>
        <Col xs={6}>
          <Input type="checkbox" value="public" label="Public Relations / Speaking"/>
          <Input type="checkbox" value="teaching" label="Teaching / Tutoring"/>
          <Input type="checkbox" value="it" label="IT / Computer"/>
          <Input type="checkbox" value="administrative" label="Administrative"/>
          <Input type="checkbox" value="legal" label="Legal"/>
          <Input type="checkbox" value="management" label="Management"/>
        </Col>
        <Col xs={6}>
          <Input type="checkbox" value="handiwork" label="Handiwork"/>
          <Input type="checkbox" value="arts" label="Fine Arts"/>
          <Input type="checkbox" value="language" label="Foreign Language"/>
          <Input type="checkbox" value="tefl" label="TEFL / TESOL"/>
          <Input type="checkbox" value="writing" label="Writing / Editing"/>
          <Input type="checkbox" value="event" label="Event Planning"/>
          <Input type="checkbox" value="sports" label="Sports / Recreation"/>
        </Col>
      </div>
      )
    }
    else if(this.state.filter === "interests") {
      return(
        <div>
          <Col xs={6}>
            <Input type="checkbox" value="mentoring" label="Mentoring"/>
            <Input type="checkbox" value="education" label="Education"/>
            <Input type="checkbox" value="animals" label="Animals"/>
            <Input type="checkbox" value="domestic" label="Domestic Violence"/>
            <Input type="checkbox" value="youth" label="Youth"/>
            <Input type="checkbox" value="health" label="Health"/>
            <Input type="checkbox" value="arts" label="Arts and Culture"/>
            <Input type="checkbox" value="financialemp" label="Financial Empowerment"/>
          </Col>
          <Col xs={6}>
            <Input type="checkbox" value="seniors" label="Seniors"/>
            <Input type="checkbox" value="disabilities" label="People with Disabilities"/>
            <Input type="checkbox" value="hunger" label="Hunger"/>
            <Input type="checkbox" value="lgbt" label="Lesbian, gay, bisexual, transgender"/>
            <Input type="checkbox" value="homeless" label="Homeless / Housing"/>
            <Input type="checkbox" value="immigration" label="Immigration"/>
            <Input type="checkbox" value="veterans" label="Veterans"/>
            <Input type="checkbox" value="environment" label="Environment / Sustainability"/>
          </Col>
      </div>
        )
    }
    return;
  }

  render() {
        return (
          <Grid className={styles.wrapper}>
            <Row className={styles.row}>
                <Col xs={12} className={styles.detailsBanner}>
                    <div className={styles.header}>
                        <h2>Hours for {this.props.user}</h2>
                    </div>
                </Col>
                <div className={styles.hoursSection}>
                  <Col xs={12} sm={6} className={styles.leftSide}>
                      <Row>
                          <p className={styles.leftTitle}>Chart</p>
                          <ProfileChart />
                      </Row>
                  </Col>
                  <Col xs={12} sm={6} className={styles.rightSide}>
                    <div>
                      <h2>Total hours volunteered: {this.props.hours}</h2>
                      <Input type="select" placeholder="Organization" label="Search by Organization" >
                        <option value="all">All organizations</option>
                        <option value="joey">Michael Weintraub</option>
                        <option value="boston">Northeastern</option>
                      </Input>
                      <Input label="Add a filter"/>
                      <ButtonGroup label="Add a filter" className={styles.filterSelect}>
                        <Button onClick={this.setNoneState.bind(this)}>None</Button>
                        <Button onClick={this.setLocState.bind(this)}>Neighborhood</Button>
                        <Button onClick={this.setTimeState.bind(this)}>Date</Button> 
                        <Button onClick={this.setSkillsState.bind(this)}>Skills</Button>
                        <Button onClick={this.setInterestsState.bind(this)}>Interests</Button>
                      </ButtonGroup>
                      <div>
                        {this.renderFilterSection()}
                        <div>
                            <Button onClick={this.searchForEvents.bind(this)} bsStyle="primary" className={styles.filterButton}>Apply filter</Button>
                        </div>
                      </div>
                      <div className={styles.filterResults}>
                        <EventSearchResults events={this.props.events} />
                      </div>
                    </div>                   
                  </Col>
                </div>
            </Row>
        </Grid>
      );
    }
}

HoursFilterContainer.propTypes = {
    events: PropTypes.array.isRequired
};

HoursFilterContainer.defaultProps = {
    events: []
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ fetchSearchEvents, resetSearchEvents, pushRoute }, dispatch)
);

const mapStateToProps = (state) => (
    {events: state.searchEvents.events}
);

export default connect(mapStateToProps, mapDispatchToProps)(HoursFilterContainer)

