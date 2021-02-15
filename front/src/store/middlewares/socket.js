// Package imports
import io from 'socket.io-client';

// == Local imports
// actions
import { CONNECT_WEB_SOCKET } from '../action';
import { receiveMessage } from '../action';
// API url
import apiUrl from './apiUrl';

let socket = null;

const socketMiddleware = store => next => action => {
  switch (action.type) {

    case CONNECT_WEB_SOCKET: {
      if (!socket) {
        // socket connection
        socket = io(apiUrl, {transports: ['websocket', 'polling', 'flashsocket']});

        // socket subscription
        socket.on('send_message', (msg) => {
          store.dispatch(receiveMessage(msg))
        });
      }
      break;
    }

    case 'EMIT_MESSAGE': {
      const { newMessage, username } = store.getState();

      if (socket) {
        socket.emit('send_message', {author: username, content: newMessage});
      }
      next(action);
      break;
    }

    default: next(action);
  };
};

export default socketMiddleware;