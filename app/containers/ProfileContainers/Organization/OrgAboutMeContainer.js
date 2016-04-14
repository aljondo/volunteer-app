import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateName, updateEmail, clearUpdateFields, updateUser } from '../../../actions/editUser'
import OrgAboutMe from "../../../components/ProfileComponents/Organization/OrgAboutMe"
import EditingOrgAboutMe from "../../../components/ProfileComponents/Organization/EditingOrgAboutMe"


//TODO finish writing methods to update the user
//TODO follow the same general flow
//TODO probably use the user register form for reference. Everything is very similar
class OrgAboutMeContainer extends Component {

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
        this.props.updateUser(this.props.updateFields, "organization");
    }

    updateName(e){
        this.props.updateName(e.target.value);
    }

    updateEmail(e){
        this.props.updateEmail(e.target.value);
    }

    render() {
        let content = <OrgAboutMe user={this.props.user}
                                   openEdit={this.openEdit.bind(this)} />;

        if (this.state.editing) {
            content = <EditingOrgAboutMe user={this.props.user}
                                          applyUpdates={this.applyUpdates.bind(this)}
                                          closeEdit={this.closeEdit.bind(this)}
                                          updateName={this.updateName.bind(this)}
                                          updateEmail={this.updateEmail.bind(this)}/>;
        }

        return ( content )
    }
}

OrgAboutMeContainer.propTypes = {
    user: PropTypes.object.isRequired,
    updateFields: PropTypes.object
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ updateName, updateEmail, clearUpdateFields, updateUser }, dispatch)
);

const mapStateToProps = (state) => (
{
    user: state.auth.user,
    updateFields: state.auth.update.fields
}
);

export default connect(mapStateToProps, mapDispatchToProps)(OrgAboutMeContainer)
