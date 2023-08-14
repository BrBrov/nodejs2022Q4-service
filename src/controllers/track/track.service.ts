import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrackDto, Track } from 'src/models/track-models';
import TrackEntity from 'src/type-orm/entity/track-entity';
import { Repository } from 'typeorm';

@Injectable()
export default class TrackService {
  constructor(
    @InjectRepository(TrackEntity) private readonly db: Repository<TrackEntity>,
  ) {}

  public async getAllTracks(): Promise<Track[]> {
    return await this.db.find({
      select: {
        id: true,
        name: true,
        artistId: true,
        albumId: true,
      },
    });
  }

  public async getTrack(id: string): Promise<Track> {
    return await this.db.findOne({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        artistId: true,
        albumId: true,
      },
    });
  }

  public async createTrack(dto: TrackDto): Promise<Track> {
    return await this.db.save(dto);
  }

  public async updateTrack(id: string, dto: TrackDto) {
    return await this.db.update({ id }, { ...dto }).then((result) => {
      if (result.affected === 0) return null;

      return this.db.findOne({
        where: {
          id: id,
        },
      });
    });
  }

  public async deleteTrack(id: string): Promise<boolean> {
    return await this.db.delete(id).then((result) => {
      if (result.affected === 0) return false;

      return true;
    });
  }
}
