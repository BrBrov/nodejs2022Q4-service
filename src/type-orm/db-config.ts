import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config.js';
import userEntity from './user-entity';

const postgreConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [userEntity],
  logging: true,
  synchronize: true,
  migrations: ['./user-entity.ts'],
  migrationsTableName: 'home-library',
};

export default postgreConfig;
