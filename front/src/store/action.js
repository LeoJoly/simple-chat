export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const loginSucces = ({ username }) => ({
  type: LOGIN_SUCCESS,
  username,
});