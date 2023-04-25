import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user';
import { Topic } from './models/topic';
import { Comment } from './models/comment';
import { UserTheme } from './models/usertheme';
import { Theme } from './models/theme';

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
  POSTGRES_HOST,
} = process.env;

export const sequelize = new Sequelize(
  POSTGRES_DB || 'postgres',
  POSTGRES_USER || 'postgres',
  POSTGRES_PASSWORD || 'postgres',
  {
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    dialect: 'postgres',
    models: [User, Topic, Comment, UserTheme, Theme],
  },
);

export const createClientAndConnect = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    console.log('Connected to the Postgres database!');
  } catch (e) {
    console.error(e);
  }
};
