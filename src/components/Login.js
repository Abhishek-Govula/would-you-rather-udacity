import React, { Component } from "react";
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    user: null
  }
  handleChange = (e) => {
    const user = e.target.value
    this.setState(() => ({ user }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { user } = this.state
    const { dispatch } = this.props
    if(!user) {
      return null;
    }

    dispatch(setAuthedUser(user))

    this.setState(() => ({ user }))
  }
  render() {
    const usersOptions = this.props.users.map(user => (<option key={user.id} value={user.id}>{user.name}</option>));
    return (
      <div className="row mt-5">
        <div className="col-sm-4 text-center offset-sm-4">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <select className="form-control" required onChange={this.handleChange}>
              <option value="">Select a user</option>
              {usersOptions}
            </select>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
      </div>



    )
  }
}

function mapStateToProps({ users }) {
  const usersArray = Object.keys(users).map(user => users[user]);
  return {
    users: usersArray
  }
}

export default connect(mapStateToProps)(Login)