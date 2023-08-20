import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config.js';
import AlbumEntity from './entity/album-entity';
import ArtistEntity from './entity/artist-entity';
import TrackEntity from './entity/track-entity';
import UserEntity from './entity/user-entity';
import {
  FavoritesAlbumsEntity,
  FavoritesArtistsEntity,
  FavoritesTracksEntity,
} from './entity/favorites-entity';
import UserAuthEntity from './entity/auth-entity';

const postgreConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  // host: process.env.POSTGRES_HOST,
  host: '0.0.0.0',
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    UserEntity,
    AlbumEntity,
    ArtistEntity,
    TrackEntity,
    FavoritesArtistsEntity,
    FavoritesAlbumsEntity,
    FavoritesTracksEntity,
    UserAuthEntity,
  ],
  synchronize: true,
  keepConnectionAlive: true,
  migrations: [
    './entity/user-entity.ts',
    './entity/album-entity.ts',
    './entity/artist-entity.ts',
    './entity/track-entity.ts',
    './entity/favorites-entity.ts',
    './entity/auth-entity',
  ],
  migrationsTableName: process.env.POSTGRES_DB,
  logger: 'debug',
};

export default postgreConfig;
