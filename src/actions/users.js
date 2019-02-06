export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}
export function addUserQuestion (user, questionId) {
  return {
    type: ADD_USER_QUESTION,
    user,
    questionId
  }
}
export function saveUserAnswer (user, questionId, answer) {
  return {
    type: SAVE_USER_ANSWER,
    user,
    questionId,
    answer
  }
}