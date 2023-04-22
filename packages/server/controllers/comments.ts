import { Comment } from '../db/models/comment';
import type { RequestHandler } from 'express';
import { User } from '../db/models/user';
import { Op } from 'sequelize';

export const createComment: RequestHandler = async (req, res) => {
  console.log('req.body', req.body);
  const topic = await Comment.create({
    ...req.body,
    user_id: Number(req.body.user_id),
  });
  return res.json(topic);
};

type TopicWithUser = Comment & { userName?: User['name'] };
export const getAllComments: RequestHandler = async (req, res) => {
  const data: TopicWithUser[] = await Comment.findAll({
    attributes: ['id', 'title', 'createdAt'],
    include: [
      {
        model: User,
        attributes: [['name', 'userName']],
      },
    ],
  });
  return res.json(data);
};

export const deleteComment: RequestHandler = async (req, res) => {
  const isDeleted = await Comment.destroy({
    where: {
      id: {
        [Op.eq]: Number(req.body.id),
      },
    },
  });
  return res.json(isDeleted);
};
