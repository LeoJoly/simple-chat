export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CONNECT_WEB_SOCKET = 'CONNECT_WEB_SOCKET';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RESET_FIELD = 'RESET_FIELD';

export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const connectWebSocket = () => ({
  type: CONNECT_WEB_SOCKET,
})

export const loginSuccess = ({ username }) => ({
  type: LOGIN_SUCCESS,
  username,
});

export const getMessageSuccess = ({ messages }) => ({
  type: GET_MESSAGES_SUCCESS,
  messages,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const resetField = () => ({
  type: RESET_FIELD,
});