// == Packages imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// == Local imports
// styles
import './styles/reset.scss';
import './styles/index.scss';
// components
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
