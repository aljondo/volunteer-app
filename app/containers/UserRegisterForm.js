import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveUser } from '../actions/users'
import UserRegisterForm from '../components/RegisterForm/UserRegisterForm'



//function mapDispatchToProps(dispatch) {
//    return {
//        dispatch,
//        onRegisterClick: (user) => dispatch(saveUser(user))
//    };
//}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveUser }, dispatch)
}

function mapStateToProps(state) {
    return {
        currentUser: state.users.currentUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterForm)



