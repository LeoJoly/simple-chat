import React from 'react';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Route exact path="/">
        <p>Hi! I'm your beautiful app.</p>
      </Route>
    </div>
  );
};

export default App;