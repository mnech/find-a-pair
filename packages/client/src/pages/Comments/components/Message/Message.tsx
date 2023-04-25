import React from 'react';
import { Avatar } from '../../../../components/Avatar';
import './Message.scss';

export type IMessage = {
  id: number;
  userName: string;
  text: string;
  date: string;
};
const Message: React.FC<IMessage> = ({ id, userName, text, date }) => {
  return (
    <div className="wrapper">
      <div className="user">
        <Avatar />
      </div>
      <div className="message">
        <p className="name">{userName}</p>
        <p className="text">{text}</p>
      </div>
      <div className="date">
        <p>{new Date(date).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Message;
