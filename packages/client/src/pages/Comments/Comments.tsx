import React, { useState } from 'react';
import { Message } from './components/Message/Index';
import { NewMessage } from './components/NewMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Comments.scss';

const Comments: React.FC = () => {
  const commentsData = useSelector(
    (state: RootState) => state.comments.commentsData,
  );

  return (
    <div className="comments-page">
      <div className="comments-wrapper">
        {/*        {commentsData && (
          <div className='base-comment'>
            <Message
              userName={questionMessage.userName}
              text={questionMessage.text}
              date={questionMessage.date}
            />
          </div>
        )}*/}
        <div className="comments">
          {commentsData.map((data) => (
            <Message key={data.id} {...data} />
          ))}
        </div>
        <NewMessage />
      </div>
    </div>
  );
};

export default Comments;
