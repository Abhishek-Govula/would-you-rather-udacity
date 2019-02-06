import { RECIEVE_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECIEVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
      case SAVE_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question,
      }
      case SAVE_ANSWER : {
        const answers = state[action.questionId][action.answer].votes
        return {
          ...state,
          [action.questionId] : {
            ...state[action.questionId],
            [action.answer] : {
              ...state[action.questionId][action.answer],
              votes : answers.concat([action.authedUser])
            }
          }
        }
      }
    default :
      return state
  }
}