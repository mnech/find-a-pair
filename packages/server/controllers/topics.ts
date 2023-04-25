import { Topic } from '../db/models/topic';
import type { RequestHandler } from 'express';
import { User } from '../db/models/user';
import { Op } from 'sequelize';

export const createTopic: RequestHandler = async (req, res) => {
  const topic = await Topic.create({
    ...req.body,
    user_id: Number(req.body.user_id),
  });
  return res.json(topic);
};

type TopicWithUser = Topic & { userName?: User['name'] };
export const getAllTopics: RequestHandler = async (req, res) => {
  const data: TopicWithUser[] = await Topic.findAll({
    attributes: ['id', 'title', ['createdAt', 'date']],
    include: [
      {
        model: User,
        attributes: [['name', 'userName']],
      },
    ],
  });
  return res.json(data);
};

export const deleteTopic: RequestHandler = async (req, res) => {
  const isDeleted = await Topic.destroy({
    where: {
      id: {
        [Op.eq]: Number(req.body.id),
      },
    },
  });
  return res.json(isDeleted);
};
