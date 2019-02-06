import { SET_AUTHED_USER, REMOVE_AUTH_USER, RESTORE_AUTH_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
    case RESTORE_AUTH_USER :
      return action.id
      case REMOVE_AUTH_USER :
      return null
    default :
      return state
  }
}