import React, { Component } from 'react'
import QuestionAnswered from "./QuestionAnswered";
import QuestionAsk from "./QuestionAsk";
import { connect } from 'react-redux'
import { saveAnswer } from '../actions/questions';


const QuestionContainer = ({notFound, optOne, optTwo, question, author, authedUser, dispatch}) => {
  const isAnswered = (optOne || optTwo) ? true : false;
  const answerQuestion = (answer) => {
    dispatch(saveAnswer(authedUser, question.id, answer));
  }
  return (<div className="container">
    {notFound ? <h1 className="text-center">Question not found</h1> : <div className="row">
      <div className="col-sm-8 offset-sm-2">
        {isAnswered ? <QuestionAnswered question={question} author={author} optOne={optOne} optTwo={optTwo}/> : <QuestionAsk question={question} onAnswer={answerQuestion} />}
    </div>
  </div>}
</div>)
}

function mapStateToProps ({ authedUser, users, questions }, ownProps) {
  const question = questions[ownProps.match.params.id]
  if(!question) {
    return {
      notFound: true
  }
}
  const author = users[question.author]
  question.authorFullName = users[question.author].name;
  question.authorAvatar = users[question.author].avatarURL;
  const optOne = question.optionOne.votes.includes(authedUser)
  const optTwo = question.optionTwo.votes.includes(authedUser)
  return {
    optOne,
    optTwo,
    question,
    author,
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionContainer)