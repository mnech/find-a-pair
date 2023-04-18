import { User } from '../db/models/user';
import { Op } from 'sequelize';
import type { RequestHandler } from 'express';

export const checkUserExist: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const isUserExist = await User.count({
    where: {
      user_id: {
        [Op.eq]: Number(id),
      },
    },
  });
  return res.json(isUserExist);
};

export const addUser: RequestHandler = async (req, res) => {
  const addUser = await User.create({ ...req.body, user_id: req.body.id });
  return res.json(addUser);
};
