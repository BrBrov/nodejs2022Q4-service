import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistDto, Artist } from 'src/models/artist-models';
import ArtistEntity from 'src/type-orm/entity/artist-entity';
import { Repository } from 'typeorm';

@Injectable()
export default class ArtistService {
  constructor(
    @InjectRepository(ArtistEntity) private db: Repository<ArtistEntity>,
  ) {}

  public async getAllArtists(): Promise<Array<Artist>> {
    return await this.db.find();
  }

  public async getArtist(id: string): Promise<Artist> {
    return await this.db.findOne({
      where: {
        id: id,
      },
    });
  }

  public async createArtist(dto: ArtistDto): Promise<Artist> {
    return await this.db.save(dto);
  }

  public updateArtist(id: string, dto: ArtistDto): Promise<Artist | null> {
    return this.db.update({ id }, { ...dto }).then((result) => {
      if (result.affected === 0) return null;

      return this.db.findOne({
        where: {
          id: id,
        },
      });
    });
  }

  public async deleteArtist(id: string): Promise<boolean> {
    return await this.db.delete(id).then((result) => {
      if (result.affected === 0) return false;

      return true;
    });
  }
}
