import { User } from '../db/models/user';
import { Op } from 'sequelize';
import type { RequestHandler } from 'express';

export const checkUserExist: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const isUserExist = await User.count({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
  return res.status(200).json(isUserExist);
};

export const addUser: RequestHandler = async (req, res) => {
  const addUser = await User.create({ ...req.body });
  return res.status(200).json(addUser);
};
