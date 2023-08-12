import { Module } from '@nestjs/common';
import ArtistController from './artist.controller';
import ArtistService from './artist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ArtistEntity from 'src/type-orm/entity/artist-entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistEntity])],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export default class ArtistModule {}
