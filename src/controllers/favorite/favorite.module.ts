import { Module } from '@nestjs/common';
import FavoritesController from './favorite.controller';
import FavoritesService from './favorite.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  FavoritesAlbumsEntity,
  FavoritesArtistsEntity,
  FavoritesTracksEntity,
} from 'src/type-orm/entity/favorites-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FavoritesArtistsEntity,
      FavoritesAlbumsEntity,
      FavoritesTracksEntity,
    ]),
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export default class FavoritesModule {}
