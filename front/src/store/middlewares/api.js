// == Package imports
import axios from 'axios';

// == Local imports
//actions
import { loginSucces } from '../action';

// API url
const apiUrl = 'http://localhost:3001';

const apiMiddleware = store => next => action => {
  const state = store.getState();

  switch (action.type) {

    case 'LOGIN': {
      const config = {
        method: 'post',
        url: `${apiUrl}/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: state.username,
        },
      };

      axios(config)
        .then(res => {
          if (res.status !== 200) {
            throw res.error;
          } else {
            store.dispatch(loginSucces(res.data.user));
          }
        }).catch(err => {
          console.error('Oups! ', err);
        });

      break;
    }

    default: next(action);
  }
};

export default apiMiddleware;