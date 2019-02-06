import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

import { connect } from 'react-redux'
import { save } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optOne: '',
    optTwo: '',
    toHome: false,
  }
  handleChange = (e) => {
    const optionName = e.target.name;
    const option = e.target.value;

    this.setState(() => ({
      [optionName]: option
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const authedUser = this.props;
    const { optOne, optTwo } = this.state;
    this.props.dispatch(save(authedUser.authedUser, optOne, optTwo));
    this.setState({
      optOne: '',
      optTwo: '',
      toHome: true
    })
  }
  render() {
    const {optOne, optTwo} = this.state;
    return this.state.toHome ? <Redirect to='/' /> : (
      <div className="text-center row justify-content-center">
          <div className="col-4">
          <h2>Would You Rather</h2>
          <form  onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" 
              name="optOne"
              className="form-control" 
              placeholder="Enter option one"
              value={optOne}
              onChange={this.handleChange}
            />
            </div>
            <div className="form-group">
              <label>OR</label>
            </div>
            <div className="form-group">
              <input type="text"
              name="optTwo" 
              className="form-control" 
              placeholder="Enter option two" 
              value={optTwo}
              onChange={this.handleChange}
              />
            </div>
            <button type="submit" disabled={!optOne || !optTwo} className="btn btn-block btn-primary">Submit</button>
          </form>  
          </div>
        
      </div>
      
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    loading: authedUser === null,
    authedUser,
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(NewQuestion)