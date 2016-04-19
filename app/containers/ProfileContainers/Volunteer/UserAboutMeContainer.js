import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateName, updateEmail, updatePhone, updateBio, clearUpdateFields, updateUser } from '../../../actions/editUser'
import UserAboutMe from "../../../components/ProfileComponents/Volunteer/UserAboutMe"
import EditingUserAboutMe from "../../../components/ProfileComponents/Volunteer/EditingUserAboutMe"


//TODO finish writing methods to update the user
//TODO follow the same general flow
//TODO probably use the user register form for reference. Everything is very similar
class UserAboutMeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    componentDidMount() {
        //TODO maybe use this
    }

    openEdit(){
        this.setState({
           editing: true
        });
    }

    closeEdit(){
        this.setState({
            editing: false
        });
    }

    applyUpdates(){
        this.props.updateUser(this.props.updateFields, "volunteer");
    }

    updateName(e){
        this.props.updateName(e.target.value);
    }

    updateEmail(e){
        this.props.updateEmail(e.target.value);
    }

    updatePhone(e){
        this.props.updatePhone(e.target.value);
    }

    updateBio(e) {
        this.props.updateBio(e.target.value);
    }

    render() {
        let content = <UserAboutMe user={this.props.user}
                               openEdit={this.openEdit.bind(this)} />;

        if (this.state.editing) {
            content = <EditingUserAboutMe user={this.props.user}
                                      applyUpdates={this.applyUpdates.bind(this)}
                                      closeEdit={this.closeEdit.bind(this)}
                                      updateName={this.updateName.bind(this)}
                                      updateEmail={this.updateEmail.bind(this)}
                                      updatePhone={this.updatePhone.bind(this)}
                                      updateBio={this.updateBio.bind(this)} />;
        }

        return ( content )
    }
}

UserAboutMeContainer.propTypes = {
    user: PropTypes.object.isRequired,
    updateFields: PropTypes.object
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ updateName, updateEmail, updatePhone, updateBio, clearUpdateFields, updateUser }, dispatch)
);

const mapStateToProps = (state) => (
    {
        user: state.auth.user,
        updateFields: state.auth.update.fields
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserAboutMeContainer)
