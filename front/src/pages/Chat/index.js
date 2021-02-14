// == Package imports
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { IoIosRocket } from "react-icons/io";

// == Local imports
// components
import Message from './Message'
// hooks
import useAutoScroll from '../../hooks/useAutoScroll';
// action
import { changeField } from '../../store/action';

const Chat = ({ isLogged, messages, newMessage, trackNewMessage, username }) => {
  // custom hook to scroll automatically to the bottom
  const bottom = useAutoScroll([messages]);

  const handleChange = (event) => {
    trackNewMessage(event.target.name, event.target.value);
  };

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
              name="newMessage"
              value={newMessage}
              onChange={handleChange}
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

const mapDispatchToProps = (dispatch) => ({
  trackNewMessage: (name, value) => {
    dispatch(changeField(name, value))
  }
})

const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));

export default container;