import { Injectable } from '@nestjs/common';
import { FavoritesDataBase, favoritesDB } from 'src/database/favorites-db';
import { FavoritesResponse } from 'src/database/models/favorite-models';

@Injectable()
export default class FavoritesService {
  private db: FavoritesDataBase = favoritesDB;

  public getAllFavorites(): FavoritesResponse {
    return this.db.getFavorites();
  }

  public addArtist(id: string): boolean {
    return this.db.addArtist(id);
  }

  public deleteArtist(id: string): boolean {
    return this.db.deleteArtist(id);
  }

  public addAlbum(id: string): boolean {
    return this.db.addAlbum(id);
  }

  public deleteAlbum(id: string): boolean {
    return this.db.deleteAlbum(id);
  }

  public addTrack(id: string): boolean {
    return this.db.addTrack(id);
  }

  public deleteTrack(id: string): boolean {
    return this.db.deleteTrack(id);
  }
}
