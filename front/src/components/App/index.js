// == Package imports
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// == Local import
// components
import Login from '../../pages/Login';

const App = () => {
  return (
    <div className='app'>

      <Route exact path="/">
        <Redirect to='login' />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>
    </div>
  );
};

export default App;