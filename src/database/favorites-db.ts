import { DataBase, db } from './db';
import AlbumData from './db/album';
import ArtistData from './db/artist';
import TrackData from './db/track';
import { FavoritesResponse } from './models/favorite-models';

export class FavoritesDataBase {
  private db: DataBase;

  constructor(db: DataBase) {
    this.db = db;
  }

  public getFavorites(): FavoritesResponse {
    return {
      artists: this.db.favorites.getArtists(),
      albums: this.db.favorites.getAlbums(),
      tracks: this.db.favorites.getTracks(),
    };
  }

  public addTrack(id: string): boolean {
    const track: TrackData = this.findTrackInDB(id);

    if (!track) return false;

    this.db.favorites.addTrack(track);

    return true;
  }

  public addAlbum(id: string): boolean {
    const album: AlbumData = this.findAlbumInDB(id);

    if (!album) return false;

    this.db.favorites.addAlbum(album);
    return true;
  }

  public addArtist(id: string): boolean {
    const artist: ArtistData = this.findArtistInDB(id);

    if (!artist) return false;

    this.db.favorites.addArtist(artist);

    return true;
  }

  public deleteTrack(id: string): boolean {
    const track: TrackData = this.findTrackInDB(id);

    if (!track) return false;

    return this.db.favorites.deleteTrack(track);
  }

  public deleteAlbum(id: string): boolean {
    const album: AlbumData = this.findAlbumInDB(id);

    if (!album) return false;

    return this.db.favorites.deleteAlbum(album);
  }

  public deleteArtist(id: string): boolean {
    const artist: ArtistData = this.findArtistInDB(id);

    if (!artist) return false;

    return this.db.favorites.deleteArtist(artist);
  }

  private findTrackInDB(id: string): TrackData {
    return this.db.tracks.find((item: TrackData) => item.getTrackID() === id);
  }

  private findAlbumInDB(id: string): AlbumData {
    return this.db.albums.find((album: AlbumData) => album.getAlbumID() === id);
  }

  private findArtistInDB(id: string): ArtistData {
    return this.db.artists.find(
      (artist: ArtistData) => artist.getArtistID() === id,
    );
  }
}

export const favoritesDB = new FavoritesDataBase(db);
