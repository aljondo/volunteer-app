import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/index'

class UsersHello extends Component {

  componentDidMount() {
    console.log('hello')
    this.props.dispatch(
      fetchUsers()
    );
  }

  render() {
    return (
      <ul>
        {this.props.users.map((user, i) =>
          <li key={i}>{user}</li>
        )}
      </ul>
    )
  }
}

UsersHello.propTypes = {
  users: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  console.log(state)
  return {
    //maybe change to user
    users: state.users.users }
}

export default connect(mapStateToProps)(UsersHello)
