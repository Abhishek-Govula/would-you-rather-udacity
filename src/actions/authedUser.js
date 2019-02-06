export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTH_USER = 'REMOVE_AUTH_USER'
export const RESTORE_AUTH_USER = 'RESTORE_AUTH_USER'

export function setAuthedUser (id) {
  saveInStorage(id);
  return {
    type: SET_AUTHED_USER,
    id,
  }
}
export function removeAuthUser () {
  removeFromStorage();
  return {
    type: REMOVE_AUTH_USER,
  }
}
export function restoreAuthUser () {
  const id = getFromStorage();
  return {
    type: RESTORE_AUTH_USER,
    id
  }
}
function saveInStorage(user) {
  localStorage.setItem('user', user);
}
function removeFromStorage() {
  localStorage.removeItem('user');
}
function getFromStorage() {
  return localStorage.getItem('user');
}