export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const loginSuccess = ({ username }) => ({
  type: LOGIN_SUCCESS,
  username,
});

export const getMessageSuccess = ({ messages }) => ({
  type: GET_MESSAGES_SUCCESS,
  messages,
});