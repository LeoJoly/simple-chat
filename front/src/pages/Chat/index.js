// == Package imports
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { IoIosRocket } from "react-icons/io";

// == Local imports
import Message from './Message'
import useAutoScroll from '../../hooks/useAutoScroll';

const Chat = ({ isLogged, messages, username }) => {
  const bottom = useAutoScroll([messages]);

  return (
    <main className="chat">

      {/* Redirect if user's not logged */}
      {!isLogged && <Redirect to='/login' />}

      <div className="chat__container">
        <div className="chat__container__title">
          Time to discuss...
        </div>
        <div className="chat__container__app">
          <div className="chat__container__app__window">
            {messages.map(m => {
              return <Message key={m.id} msg={m} username={username} />
            })}
            <div className="chat__container__app__window__bottom" ref={bottom} />
          </div>
          <form className="chat__container__app__form">
            <textarea
              autoComplete="off"
              className="chat__container__app__form__input"
              placeholder="What do you have to say ?"
            />
            <button className="chat__container__app__form__btn" type="submit"><IoIosRocket /></button>
          </form>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
  messages: state.messages,
  username: state.username,
});

const container = withRouter(connect(mapStateToProps, null)(Chat));

export default container;