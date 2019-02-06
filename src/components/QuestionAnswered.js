import React from 'react'

const QuestionAnswered = ({question, optOne, optTwo}) => {
  const optOneVotes = question.optionOne.votes.length;
  const optTwoVotes = question.optionTwo.votes.length;
  const total = optOneVotes + optTwoVotes;
  const oneProgress = (optOneVotes / total) * 100;
  const twoProgress = (optTwoVotes / total) * 100;
  return (
        <div className="card mb-1">
          <div className="card-header">{question.authorFullName} asked</div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <img src={question.authorAvatar} width="100%" className="rounded-circle" />
              </div>
              <div className="col">
              <h5 className="card-title">Would You rather</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                <p>{question.optionOne.text} <strong>{optOne ? "You Voted": ''}</strong></p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: oneProgress+'%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p>{optOneVotes + " of " + total}</p>
                </li>
                <li className="list-group-item">
                <p>{question.optionTwo.text} <strong>{optTwo ? "You Voted" : ''}</strong></p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: twoProgress+'%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p>{optTwoVotes + " of " + total}</p>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
    )
}
export default QuestionAnswered;