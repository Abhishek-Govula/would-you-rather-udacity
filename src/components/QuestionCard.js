import React from 'react'
import { Link } from 'react-router-dom';

const QuestionCard = ({question, answered}) => {
  return (<div className="card mb-1">
  <div className="card-header">{question.authorFullName} asks... </div>
  <div className="card-body">
    <div className="row">
      <div className="col-sm-4">
        <img src={question.authorAvatar} width="100%" className="rounded-circle" />
      </div>
      <div className="col">
      <h5 className="card-title">Would You rather</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{question.optionOne.text}</li>
        <li className="list-group-item">{question.optionTwo.text}</li>
      </ul>
      <Link to={"/question/"+question.id} className="btn btn-primary mb-0">{answered ? "View Answer" : "Answer"}</Link>
      </div>
    </div>
  </div>
</div>)
}
export default QuestionCard;