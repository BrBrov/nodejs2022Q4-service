import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album, AlbumDto } from 'src/models/album-models';
import AlbumEntity from 'src/type-orm/entity/album-entity';
import { Repository } from 'typeorm';

@Injectable()
export default class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity) private db: Repository<AlbumEntity>,
  ) {}

  public async getAllAlbums(): Promise<Album[]> {
    return await this.db.find();
  }

  public async getAlbum(id: string): Promise<Album> {
    return await this.db.findOne({
      where: {
        id: id,
      },
    });
  }

  public async createAlbum(dto: AlbumDto): Promise<Album> {
    return await this.db.save(dto);
  }

  public async updateAlbum(id: string, dto: AlbumDto): Promise<Album | null> {
    return await this.db.update({ id }, { ...dto }).then((result) => {
      if (result.affected === 0) return null;
      return this.db.findOne({
        where: {
          id: id,
        },
      });
    });
  }

  public async deleteAlbum(id: string): Promise<boolean> {
    return await this.db.delete(id).then((result) => {
      if (result.affected === 0) return false;

      return true;
    });
  }
}
