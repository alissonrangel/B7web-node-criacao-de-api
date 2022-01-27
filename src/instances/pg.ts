// import {Pool} from 'pg';

// const connectionString = 'postgresql://postgres:alissonpg@localhost:5432/db_dio';

// const db = new Pool({ connectionString })

// export default db;

import {Sequelize} from 'sequelize';

import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.PG_DB as string,
  process.env.PG_USER as string,
  process.env.PG_PASSWORD as string,
  {
    dialect: 'postgres',
    port: parseInt(process.env.PG_PORT as string) 
  }
);