import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'

import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Home from './Home'
import QuestionContainer from './QuestionContainer'
import Login from './Login'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { removeAuthUser } from '../actions/authedUser';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  logoutUser() {
    this.props.dispatch(removeAuthUser())
  }
  render() {
    const loggedIn = this.props.authedUser;
    if(loggedIn) {
    return (
      <Router>
        <Fragment>
          <LoadingBar  style={{ backgroundColor: '#007bff' }}/>
          <div className='container-fluid' style={{marginTop: '2px'}}>
            <Nav user={this.props.user} onLogout={() => this.logoutUser()} />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Home} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/question/:id' component={QuestionContainer} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
            } else {
              return <Login />
            }
  }
}

function mapStateToProps (store) {
  const { authedUser, users } = store;
  return {
    loading: authedUser === null,
    authedUser,
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(App)