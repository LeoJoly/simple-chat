// == Imports
// packages
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import reducer from './reducer';
// MW

// store creation
const store = createStore(
  reducer,
  composeWithDevTools(),
);

export default store;