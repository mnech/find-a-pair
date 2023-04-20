import { Message } from './components/Message/Index';
import { NewMessage } from './components/NewMessage';
import './Comments.scss';
import React from 'react';

interface IMessage {
  userName: string;
  text: string;
  messageId: number;
  date: string;
}

const Comments: React.FC = () => {
  const messageList: IMessage[] = [
    {
      userName: 'Ivan',
      text: 'Не получается пройти уровень. Пробовал жать на пробел, но герой не прыгает так как я хочу',
      messageId: 1,
      date: '22/02/2022 18.30',
    },
    {
      userName: 'Laila',
      text: 'Жми на пробел сильнее и наклоняйся в сторону прыжка!',
      messageId: 2,
      date: '22/02/2022 18.30',
    },
    {
      userName: 'Jonh',
      text: 'Check yours ping and connection',
      messageId: 3,
      date: '22/02/2022 18.30',
    },
    {
      userName: 'Laila',
      text: 'Жми на пробел сильнее и наклоняйся в сторону прыжка!',
      messageId: 4,
      date: '22/02/2022 18.30',
    },
    {
      userName: 'Jonh',
      text: 'Check yours ping and connection',
      messageId: 5,
      date: '22/02/2022 18.30',
    },
    {
      userName: 'Laila',
      text: 'Жми на пробел сильнее и наклоняйся в сторону прыжка!',
      messageId: 6,
      date: '22/02/2022 18.30',
    },
    {
      userName: 'Jonh',
      text: 'Check yours ping and connection',
      messageId: 7,
      date: '22/02/2022 18.30',
    },
  ];
  const questionMessage = messageList.shift() as IMessage;
  return (
    <div className="comments-page">
      <div className="comments-wrapper">
        {questionMessage && (
          <div className="base-comment">
            <Message
              userName={questionMessage.userName}
              text={questionMessage.text}
              date={questionMessage.date}
            />
          </div>
        )}
        <div className="comments">
          {messageList.map((data) => (
            <Message key={data.messageId} {...data} />
          ))}
        </div>
        <NewMessage />
      </div>
    </div>
  );
};

export default Comments;
