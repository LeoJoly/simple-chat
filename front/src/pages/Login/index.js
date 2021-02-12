// Package imports
import React from 'react';

const Login = () => {

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
            />
            <button className="login__container__connect__form__btn" type="submit">Chat !</button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;