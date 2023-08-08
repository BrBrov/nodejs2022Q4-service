import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config.js';
import userEntity from './entityes/user-entity';
import albumEntity from './entityes/album-entity';
import artistEntity from './entityes/artist-entity';
import trackEntity from './entityes/track-entity';
import favoritesEntity from './entityes/favorites-entity';

const postgreConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
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
    './entityes/user-entity.ts',
    './entityes/album-entity.ts',
    './entityes/artist-entity.ts',
    './entityes/track-entity.ts',
    './entityes/favorites-entity.ts',
  ],
  migrationsTableName: process.env.POSTGRES_DB,
};

export default postgreConfig;
