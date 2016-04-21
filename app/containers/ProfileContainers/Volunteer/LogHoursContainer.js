import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setStartTime,
    setEndTime,
    logHours
} from '../../../actions/hours';
import LogHoursPopover from '../../../components/ProfileComponents/Volunteer/EventDashboard/LogHoursPopover'

class LogHoursPopoverContainer extends Component {

    startChange(e) {
        this.props.setStartTime(e.target.value);
    }
    endChange(e) {
        this.props.setEndTime(e.target.value);
    }

    submitHours() {
        this.props.logHours({start: this.props.start, end: this.props.end})
    }
    render() {
        return (
            <LogHoursPopover startChange={this.startChange.bind(this)}
                             endChange={this.endChange.bind(this)}
                             submitHours={this.submitHours.bind(this)} />
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setStartTime,
        setEndTime,
        logHours
    }, dispatch)
);

const mapStateToProps = (state) => (
    {
        start: state.hours.start,
        end: state.hours.end
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(LogHoursPopoverContainer)