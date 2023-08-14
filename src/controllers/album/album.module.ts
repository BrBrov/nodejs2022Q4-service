import { Module } from '@nestjs/common';
import AlbumController from './album.controller';
import AlbumService from './album.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import AlbumEntity from 'src/type-orm/entity/album-entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumEntity])],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export default class AlbumModule {}
