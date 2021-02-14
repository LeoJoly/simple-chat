import React from 'react';

const Message = ({ msg, username }) => {
  // change css class if author is user
  const msgCss = msg.author === username
    ? 'message--sent'
    : 'message'
  
    const containerCss = msg.author === username
    ? 'message__container--sent'
    : 'message__container'
  
  return (
    <article className={msgCss}>
      <div className={containerCss}>
        <h2 className="message__container__user">{msg.author}</h2>
        <p className="message__container__content">{msg.content}</p>
      </div>
    </article>
  );
};

export default Message;