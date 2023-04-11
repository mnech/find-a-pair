import { Client } from 'pg';
import { Sequelize } from 'sequelize-typescript';

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
  POSTGRES_HOST,
} = process.env;

export const createClientAndConnect = async (): Promise<Client | null> => {
  try {
    const client = new Client({
      user: POSTGRES_USER,
      host: POSTGRES_HOST || 'localhost',
      database: POSTGRES_DB,
      password: POSTGRES_PASSWORD,
      port: Number(POSTGRES_PORT),
    });

    await client.connect();

    const res = await client.query('SELECT NOW()');
    console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now);
    client.end();

    return client;
  } catch (e) {
    console.error(e);
  }

  return null;
};

export const sequelize = new Sequelize(
  POSTGRES_DB || 'postgres',
  POSTGRES_USER || 'postgres',
  POSTGRES_PASSWORD || 'postgres',
  {
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    dialect: 'postgres',
    models: [__dirname + '/models'],
  },
);
