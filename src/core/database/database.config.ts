import * as dotenv from 'dotenv';
import { IDatabaseConfigAttributes } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfigAttributes = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: process.env.DB_DIALECT,
};
