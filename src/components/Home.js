import React, { Component } from "react";
import QuestionCard from './QuestionCard';
import QuestionContainer from './QuestionContainer'
import { connect } from 'react-redux'


class Home extends Component {
  state ={
    activeView: 'unAnswered',
    activeList: this.props['unAnswered']
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      activeView: 'unAnswered',
      activeList: newProps['unAnswered']
    })
  }
  changeView(e, view) {
    e.preventDefault();
    this.setState({
      activeView: view,
      activeList: this.props[view]
    })
  }
  render() {
    const {activeView} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a href="" className={"nav-link " + (activeView == 'unAnswered' ? "active": "")} onClick={(e) => this.changeView(e, 'unAnswered')}>Unanswered Questions</a>
            </li>
            <li className="nav-item">
              <a href="" className={"nav-link " + (activeView == 'answered' ? "active": "")} onClick={(e) => this.changeView(e, 'answered')}>Answered Questions</a>
            </li>
          </ul>
          {this.state.activeList.map(question => <QuestionCard key={question.id} question={question} answered={this.state.activeView == 'answered'} />)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  const questionsArray = Object.values(questions).map(question => ({ 
    ...question, 
    authorFullName: users[question.author].name, 
    authorAvatar: users[question.author].avatarURL
  }));
  const userAnswers = users[authedUser].answers;
  return {
    answered: questionsArray.filter(question => {
      return userAnswers[question.id]
    }).sort((a,b) => b.timestamp - a.timestamp),
    unAnswered: questionsArray.filter(question => {
      return !userAnswers[question.id]
    }).sort((a,b) => b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(Home)