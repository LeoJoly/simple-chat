// == Package imports
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// == Local import
// components
import Login from '../../pages/Login';
import Chat from '../../pages/Chat';

const App = ({ isLogged }) => {
  return (
    <div className='app'>

      <Route exact path="/">
        {!isLogged && <Redirect to='/login' />}
        {isLogged && <Redirect to='/chat' />}
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/chat">
        <Chat />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

const container = withRouter(connect(mapStateToProps, null)(App));

export default container;