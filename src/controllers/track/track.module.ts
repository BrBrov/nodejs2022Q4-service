import { Module } from '@nestjs/common';
import TrackController from './track.controller';
import TrackService from './track.service';
import TrackEntity from 'src/type-orm/entity/track-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TrackEntity])],
  controllers: [TrackController],
  providers: [TrackService],
})
export default class TrackModule {}
