import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../selectors/profile';
import ForumController from '../../controllers/ForumController';
import { RootState } from '../../store';
import { ITopic } from '../../models/Forum';
import './forum.scss';

const getAllTopics = async () => {
  await ForumController.getAllTopics();
};

const Forum = () => {
  const userData = useSelector(userDataSelector);
  const topicsData = useSelector((state: RootState) => state.forum.topicsData);
  const [topicName, setTopicName] = useState<string>('');
  const [topicNameError, setTopicNameError] = useState<string>('');

  useEffect(() => {
    getAllTopics();
  }, []);

  const handleChangeTopicName = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTopicName(event.currentTarget.value);
  };

  const handleClickDelete = (id: number) => async () => {
    console.log({ id });
    await ForumController.deleteTopic(id);
  };

  const handleClickTopicCreate = async () => {
    if (!topicNameError) {
      setTopicNameError('Заполните значение');
    } else {
      await ForumController.createTopic({
        user_id: userData.id,
        title: topicName,
      }).then(() => setTopicName(''));
    }
  };

  return (
    <div>
      <header className="border-bottom border-info p-4">Forum</header>
      <div className="p-5 d-flex flex-sm-column align-items-center">
        <input
          type="text"
          id="forumName"
          className="form-control form-control-lg"
          required
          onChange={handleChangeTopicName}
          value={topicName}
          placeholder="Название"
        />
        <button
          className="btn btn-primary w-20 mt-2"
          onClick={handleClickTopicCreate}
        >
          Создать
        </button>
      </div>
      <div className="p-5">
        {topicsData.map((topic: ITopic) => {
          return (
            <div
              key={topic.id}
              className="p-3 forum-topic d-flex border-bottom bg-light"
            >
              <div className="d-flex flex-column flex-grow-1">
                <span className="text-info fw-bold">
                  <a href={`forum/${topic.id}`}>{topic.title}</a>
                </span>
                <span className="text-muted">Автор: {topic.userName}</span>
              </div>
              <button
                type="button"
                className="btn btn-light"
                onClick={handleClickDelete(topic.id)}
              >
                Удалить
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forum;
