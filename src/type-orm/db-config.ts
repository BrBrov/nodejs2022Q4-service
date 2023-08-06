import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config.js';
import userEntity from './user-entity';
import albumEntity from './album-entity';
import artistEntity from './artist-entity';
import trackEntity from './track-entity';
import favoritesEntity from './favorites-entity';

const postgreConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    userEntity,
    albumEntity,
    artistEntity,
    trackEntity,
    favoritesEntity,
  ],
  logging: true,
  synchronize: true,
  migrations: [
    './user-entity.ts',
    './album-entity.ts',
    './artist-entity.ts',
    './track-entity.ts',
    './favorites-entity.ts',
  ],
  migrationsTableName: 'home-library',
};

export default postgreConfig;
