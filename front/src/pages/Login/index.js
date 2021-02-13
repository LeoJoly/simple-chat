// == Package imports
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

// == Local imports
// action
import { changeField } from '../../store/action';

const Login = ({ handleLogin, isLogged, username, trackUsername }) => {
  // tracking login field
  const onChange = (event) => {
    trackUsername(event.target.name, event.target.value);
  };

  // submit action
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <main className="login">

      {/* Redirect when user is logged */}
      {isLogged && <Redirect to='/chat' />}
      
      <div className="login__container">
        <section className="login__container__text">
          Welcome to Simple Chat !
        </section>
        <section className="login__container__connect">
          <p className="login__container__connect__text">Choose a funny username to join the chat.</p>
          <form className="login__container__connect__form" onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              className="login__container__connect__form__input"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={onChange}
            />
            <button className="login__container__connect__form__btn" type="submit">Chat !</button>
          </form>
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
  username: state.username,
});

const mapDispatchToProps = (dispatch) => ({
  trackUsername: (name, value) => {
    dispatch(changeField(name, value));
  },

  handleLogin: () => {
    dispatch({type: 'LOGIN'});
  },
});

let container = withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));


export default container;