import { _save, _saveAnswer } from "../utils/api";
import { addUserQuestion, saveUserAnswer } from "./users";
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'


export function recieveQuestions (questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  }
}
export function saveQuestion(question) {
  return {  
    type: SAVE_QUESTION,
    question
  }
}
export function saveAnswerToStore(authedUser, questionId, answer) {
  return {  
    type: SAVE_ANSWER,
    authedUser,
    questionId,
    answer
  }
}
export function save (author, optionOne, optionTwo) {
  const question = {
    author: author,
    optionOneText: optionOne,
    optionTwoText: optionTwo
  }
  return (dispatch) => {
    return _save(question).then((question) => {
      console.log(question)
      dispatch(saveQuestion(question))
      dispatch(addUserQuestion(question.author, question.id))
    })
    
  }
}
export function saveAnswer (authedUser, questionId, answer) {
  const obj = {
    authedUser: authedUser,
    qid: questionId,
    answer: answer
  }
  return (dispatch) => {
    return _saveAnswer(obj).then((qans) => {
      dispatch(saveAnswerToStore(authedUser, questionId, answer));
      dispatch(saveUserAnswer(authedUser, questionId, answer));
    })
    
  }
}
