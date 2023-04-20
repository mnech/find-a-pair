import React from 'react';
import { Avatar } from '../../../../components/Avatar';
import './Message.scss';

export type IMessage = {
  userName: string;
  text: string;
  date: string;
};
const Message: React.FC<IMessage> = ({ userName, text, date }) => {
  return (
    <div className="wrapper">
      <div className="user">
        <Avatar />
        <p className="name">{userName}</p>
      </div>
      <div className="message">
        <p className="text">{text}</p>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Message;
