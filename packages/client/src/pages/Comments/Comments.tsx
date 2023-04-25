import React, { useEffect } from 'react';
import { Message } from './components/Message/Index';
import { NewMessage } from './components/NewMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Comments.scss';
import { Avatar } from '../../components/Avatar';
import CommentsController from '../../controllers/CommentsController';

const getAllComments = async () => {
  await CommentsController.getAllComments();
};

const Comments: React.FC = () => {
  const currentTopic = useSelector(
    (state: RootState) => state.forum.currentTopic,
  );
  const commentsData = useSelector(
    (state: RootState) => state.comments.commentsData,
  );

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className="comments-page">
      <div className="comments-wrapper">
        <div className="base-comment">
          <div className="wrapper">
            <div className="user">
              <Avatar />
            </div>
            <div className="message">
              <p className="name">{currentTopic?.userName || ''}</p>
              <p className="text">{currentTopic?.title || ''}</p>
            </div>
            <div className="date">
              <p>
                {currentTopic?.date
                  ? new Date(currentTopic.date).toLocaleString()
                  : ''}
              </p>
            </div>
          </div>
        </div>
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
