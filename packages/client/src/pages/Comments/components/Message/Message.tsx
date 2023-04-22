import React from 'react';
import { Avatar } from '../../../../components/Avatar';
import './Message.scss';

export type IMessage = {
  id: number;
  userName: string;
  text: string;
  date: number;
};
const Message: React.FC<IMessage> = ({ id, userName, text, date }) => {
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
