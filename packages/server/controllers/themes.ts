import { Theme } from '../db/models/theme';
import { UserTheme } from '../db/models/usertheme';
import type { RequestHandler } from 'express';
import { Op } from 'sequelize';

export const createTheme: RequestHandler = async (req, res) => {
  const theme = await Theme.create({
    ...req.body,
  });
  return res.json(theme);
};

export const deleteTheme: RequestHandler = async (req, res) => {
  const isDeleted = await Theme.destroy({
    where: {
      id: {
        [Op.eq]: Number(req.body.id),
      },
    },
  });
  return res.json(isDeleted);
};

export const getAllThemes: RequestHandler = async (req, res) => {
  const themes = await Theme.findAll({
    attributes: ['id', 'name'],
  });

  return res.json(themes);
};

export const getUserTheme: RequestHandler = async (req, res) => {
  const usersTheme = await UserTheme.findOne({
    where: { user_id: req.params.user_id },
  });

  return res.json(usersTheme);
};

export const updateUserTheme: RequestHandler = async (req, res) => {
  const user_id = Number(req.body.user_id);
  const theme_id = Number(req.body.theme_id);

  const theme = await UserTheme.update(
    { theme_id },
    {
      where: {
        user_id,
      },
    },
  );

  return res.json(theme);
};
