// Package imports
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// == Local imports
// action
import { changeField } from '../../store/action';

const Login = ({ username, trackUsername }) => {
  const onChange = (event) => {
    trackUsername(event.target.name, event.target.value);
  };

  return (
    <main className="login">
      <div className="login__container">
        <section className="login__container__text">
          Welcome to Simple Chat !
        </section>
        <section className="login__container__connect">
          <p className="login__container__connect__text">Choose a funny username to join the chat.</p>
          <form className="login__container__connect__form">
            <input
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
  username: state.username,
});

const mapDispatchToProps = (dispatch) => ({
  trackUsername: (name, value) => {
    dispatch(changeField(name, value));
  }
});

let container = withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));


export default container;