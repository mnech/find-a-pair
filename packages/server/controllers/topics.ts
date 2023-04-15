import { Topic } from '../db/models/topic';
import type { RequestHandler } from 'express';
import { User } from '../db/models/user';

export const createTopic: RequestHandler = async (req, res) => {
  const topic = await Topic.create({ ...req.body });
  return res.status(200).json(topic);
};

type TopicWithUser = Topic & { userName?: User['name'] };
export const getAllTopic: RequestHandler = async (_req, res) => {
  const data: TopicWithUser[] = await Topic.findAll({
    include: [
      {
        model: User,
        attributes: ['name', 'userName'], // и какие столбцы из этой модели нужны
      },
    ],
  });
  const cnt: number = data.length;
  return res.status(200).json({ count: cnt, data });
};
