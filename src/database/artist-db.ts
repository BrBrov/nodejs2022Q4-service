import { DataBase, db } from './db';
import AlbumData from './db/album';
import ArtistData from './db/artist';
import TrackData from './db/track';
import { Artist, ArtistDto } from './models/artist-models';

export class ArtistDataBase {
  private db: DataBase;

  constructor(db: DataBase) {
    this.db = db;
  }

  public getAllArtists(): Array<Artist> {
    return this.db.artists.map((item: ArtistData) => item.getArtist());
  }

  public getArtist(id: string): Artist | null {
    const artist = this.db.artists.find((item: ArtistData) => {
      if (item.getArtistID() === id) return item;
    });

    if (!artist) return null;

    return artist.getArtist();
  }

  public createArtist(dto: ArtistDto): Artist {
    const artist = new ArtistData(dto);

    this.db.artists.push(artist);

    return artist.getArtist();
  }

  public updateArtist(id: string, dto: ArtistDto): Artist | null {
    const artist = this.db.artists.find((item: ArtistData) => {
      if (item.getArtistID() === id) return item;
    });

    if (!artist) return null;

    return artist.updateArtist(dto);
  }

  public deleteArtist(id: string): boolean {
    const isArtist = this.db.artists.some(
      (item: ArtistData) => item.getArtistID() === id,
    );

    if (!isArtist) return false;

    this.db.artists = this.db.artists.filter((item: ArtistData) => {
      if (item.getArtistID() !== id) {
        return item;
      }
    });

    this.db.tracks.forEach((track: TrackData) => {
      if (track.checkArtistID(id)) track.setArtistID(null);
    });

    this.db.albums.forEach((album: AlbumData) => {
      if (album.checkArtistID(id)) album.setArtistID(null);
    });

    this.db.favorites.deleteArtistByID(id);

    return true;
  }
}

export const artistDB = new ArtistDataBase(db);
