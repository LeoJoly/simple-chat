// == Imports
// packages
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import reducer from './reducer';
// MW
import apiMiddleware from './middlewares/api';

// store creation
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(apiMiddleware),
  ),
);

export default store;