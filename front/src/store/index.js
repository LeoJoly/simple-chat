// == Imports
// packages
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import reducer from './reducer';
// MW
import apiMiddleware from './middlewares/api';
import socketMiddleware from './middlewares/socket';

// store creation
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(apiMiddleware),
    applyMiddleware(socketMiddleware),
  ),
);

export default store;