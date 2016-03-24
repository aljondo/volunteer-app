import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/users'

//  the presentational component could be moved a stateless function in
// in components, but all is contained here as an example

class UsersHello extends Component {

  componentDidMount() {
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
  return {
    //maybe change to user.items
    users: state.users.users }
}

export default connect(mapStateToProps)(UsersHello)
