// == Packages imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// == Local imports
// styles
import './styles/reset.scss';
import './styles/index.scss';
// components
import App from './components/App';
// store
import store from './store';

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
