import { CHANGE_FIELD } from './action';

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

    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;