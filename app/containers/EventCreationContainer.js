import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setName,
    setAddress,
    setDate,
    setZipcode,
    setManager,
    setError,
    removeError,
    reset,
    saveEvent,
    openModal,
    closeModal } from '../actions/events/eventcreation';
import { push as pushRoute} from 'react-router-redux';
import EventCreation from '../components/EventCreation/EventCreation.js'


class EventCreationContainer extends Component {

    componentWillUpdate(nextProps, nextState)
    {
        if (nextProps.success) {
            nextProps.pushRoute('/profile');
        }
    }

    componentWillUnmount()
    {
        this.props.reset()
    }

        checkForm(){
            if (!this.props.event.name){
                this.props.setError("Event needs a name")
                return false;
            }
            if (!this.props.event.date) {
                this.props.setError("Event needs a date")
                return false;
            }
            if (!this.props.event.address) {
                this.props.setError("Event needs an address")
                return false;
            }
            if (!this.props.event.zipcode) {
                this.props.setError("Please specify a zipcode")
                return false;
            }
            if (this.props.event.manager) {
                this.props.setError("Please enter an event manager")
                return false;
            }
            if (this.props.event.manager) {
                this.props.setError("Please enter an event manager")
                return false;
            }
            return true;
        }

        handleCreation() {
            if (this.checkForm()) {
                this.props.saveEvent(this.props.event)
            }
        }

        nameChange(e) {
        this.props.setName(e.target.value)
    }
    dateChange(e) {
        this.props.setDate(e.target.value)
    }

    addressChange(e) {
        this.props.setAddress(e.target.value)
    }

    zipcodeChange(e) {
        this.props.setZipcode(e.target.value)
    }

    managerChange(e) {
        this.props.setManager(e.target.value)
    }

    openModal() {
        this.props.openModal();
    }

    closeModal() {
        this.props.closeModal();
    }
    render() {
        return (
            <EventCreation handleEvent={this.handleCreation.bind(this)}
                              nameChange={this.nameChange.bind(this)}
                              dateChange={this.dateChange.bind(this)}
                              addressChange={this.addressChange.bind(this)}
                              zipcodeChange={this.zipcodeChange.bind(this)}
                              managerChange={this.managerChange.bind(this)}
                              errorMessage={this.props.error}
                              isEditing={this.props.isEditing}
                              openModal={this.openModal.bind(this)}
                              closeModal={this.closeModal.bind(this)} />
        );
    }
}

EventCreationContainer.propTypes = {
    event: PropTypes.object.isRequired,
    isEditing: PropTypes.bool.isRequired,
    error: PropTypes.string
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ saveEvent, setName, setDate, setAddress, pushRoute, setError, reset, setZipcode, setManager, openModal, closeModal}, dispatch)
)

const mapStateToProps = (state) => (
{ event: state.eventcreation.event,
    error: state.eventcreation.error,
    isSaving: state.eventcreation.isSaving,
    success: state.eventcreation.success,
    isEditing: state.eventcreation.isEditing
}
)

export default connect(mapStateToProps, mapDispatchToProps)(EventCreationContainer)

