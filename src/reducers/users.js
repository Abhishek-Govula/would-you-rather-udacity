import { RECEIVE_USERS, ADD_USER_QUESTION, SAVE_USER_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_QUESTION :
      const user = state[action.user];
      return {
        ...state,
        [action.user]: {
          ...user,
          questions: [...user.questions, action.questionId]
        }
      }
      case SAVE_USER_ANSWER :
      return {
        ...state,
        [action.user] : {
          ...state[action.user],
          answers : {
            ...state[action.user].answers,
            [action.questionId] : action.answer
          }
        }
      }
    default :
      return state
  }
}