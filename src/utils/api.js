import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function _save (question) {
  return _saveQuestion(question)
}
export function _saveAnswer (answer) {
  return _saveQuestionAnswer(answer)
}

