import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FavoritesAlbumsEntity,
  FavoritesArtistsEntity,
  FavoritesTracksEntity,
} from 'src/type-orm/entity/favorites-entity';
import { Repository } from 'typeorm';

@Injectable()
export default class FavoritesService {
  constructor(
    @InjectRepository(FavoritesArtistsEntity)
    private artists: Repository<FavoritesArtistsEntity>,
    @InjectRepository(FavoritesAlbumsEntity)
    private albums: Repository<FavoritesAlbumsEntity>,
    @InjectRepository(FavoritesTracksEntity)
    private tracks: Repository<FavoritesTracksEntity>,
  ) {}

  public async getAllFavorites() {
    const albums = await this.albums.find({
      relations: ['album'],
    });
    const artists = await this.artists.find({
      relations: ['artist'],
    });
    const tracks = await this.tracks.find({
      relations: ['track'],
    });

    return {
      albums: albums.map((item) => item.album),
      artists: artists.map((item) => item.artist),
      tracks: tracks.map((item) => item.track),
    };
  }

  public async addArtist(id: string): Promise<FavoritesArtistsEntity> {
    return await this.artists.save({
      id: id,
      artistId: id,
    });
  }

  public async deleteArtist(id: string): Promise<boolean> {
    return await this.artists.delete({ id }).then((result) => {
      if (result.affected === 0) return false;

      return true;
    });
  }

  public async addAlbum(id: string): Promise<FavoritesAlbumsEntity> {
    return await this.albums.save({
      id: id,
      albumId: id,
    });
  }

  public async deleteAlbum(id: string): Promise<boolean> {
    return await this.albums.delete({ id }).then((result) => {
      if (result.affected === 0) return false;

      return true;
    });
  }

  public async addTrack(id: string): Promise<FavoritesTracksEntity> {
    return await this.tracks.save({
      id: id,
      trackId: id,
    });
  }

  public async deleteTrack(id: string): Promise<boolean> {
    return await this.tracks.delete({ id }).then((result) => {
      if (result.affected === 0) return false;

      return true;
    });
  }
}
