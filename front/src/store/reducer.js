import { CHANGE_FIELD, LOGIN_SUCCESS } from './action';

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
      
    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;