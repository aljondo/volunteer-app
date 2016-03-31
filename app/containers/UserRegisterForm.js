import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveUser } from '../actions/users'
import { push as pushRoute} from 'react-router-redux';
import UserRegisterForm from '../components/RegisterForm/UserRegisterForm'


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveUser, pushRoute }, dispatch)
}

function mapStateToProps(state) {
    return {
        currentUser: state.users.currentUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterForm)



