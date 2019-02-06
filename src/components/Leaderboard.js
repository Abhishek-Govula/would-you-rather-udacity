import React, { Component } from "react";
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.leaders.map(user => {
            return (
              <div key={user.id} className="col-sm-4">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        width="100%"
                        src={user.avatarURL}
                        className="rounded-circle"
                        alt={user.name}
                      />
                    </div>
                    <h5 className="card-title pt-4">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Score</h6>
                    <h1 className="card-text">{user.score}</h1>
                    <div className="row">
                      <div className="col">
                        <p className="card-text">Questions</p>
                        <h4 className="card-text">{user.questions.length}</h4>
                      </div>
                      <div className="col">
                        <p className="card-text">Answers</p>
                        <h4 className="card-text">{Object.keys(user.answers).length}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ users }) {
  const leaders = Object.values(users).map((user, i) => {
    const total = Object.keys(user.answers).length + user.questions.length;
    return {...user, score: total}
  }).sort((a, b) => {
      if (a.score < b.score)
        return 1;
      if (a.score > b.score)
        return -1;
      return 0;
    })
  return {
    leaders: leaders
  }
}

export default connect(mapStateToProps)(Leaderboard)