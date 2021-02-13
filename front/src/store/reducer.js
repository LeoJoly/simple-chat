import { CHANGE_FIELD, GET_MESSAGES_SUCCESS, LOGIN_SUCCESS } from './action';

const initialState = {
  username: '',
  newMessage: '',
  isLogged: false,
  messages: [],
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };

    case LOGIN_SUCCESS:
      return {
        ...oldState,
        username: action.username,
        isLogged: true,
      };
      
    case GET_MESSAGES_SUCCESS:
      return {
        ...oldState,
        messages: action.messages,
      };
      
    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;