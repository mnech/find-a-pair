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
    where: { user_id: req.body.user_id },
  });

  const themeId = usersTheme?.theme_id;
  return res.json(themeId);
};

export const updateUserTheme: RequestHandler = async (req, res) => {
  const user_id = req.body.user_id;
  const theme_id = Number(req.body.theme_id);
  let theme;

  const usersTheme = await UserTheme.findOne({
    where: { user_id },
  });

  if (usersTheme?.theme_id) {
    theme = await UserTheme.update(
      { theme_id },
      {
        where: {
          user_id,
        },
      },
    );
  } else {
    theme = await UserTheme.create({ ...req.body, user_id });
  }

  return res.json(theme);
};
