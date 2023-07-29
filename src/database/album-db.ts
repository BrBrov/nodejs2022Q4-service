import { DataBase, db } from './db';
import AlbumData from './db/album';
import { Album, AlbumDto } from './models/album-models';

export class AlbumDataBase {
  private db: DataBase;

  constructor(db: DataBase) {
    this.db = db;
  }

  public getAllAlbums(): Array<Album> {
    return this.db.albums.map((item: AlbumData) => item.getAlbum());
  }

  public getAlbum(id: string): Album | null {
    const album = this.db.albums.find((item: AlbumData) => {
      if (item.getAlbumID() === id) return item;
    });

    if (!album) return null;

    return album.getAlbum();
  }

  public createAlbum(dto: AlbumDto): Album {
    const album = new AlbumData(dto);

    this.db.albums.push(album);

    return album.getAlbum();
  }

  public updateAlbum(id: string, dto: AlbumDto): Album | null {
    const album = this.db.albums.find((item: AlbumData) => {
      if (item.getAlbumID() === id) return item;
    });

    if (!album) return null;

    return album.updateAlbum(dto);
  }

  public deleteAlbum(id: string): boolean {
    const isTrack = this.db.albums.some(
      (item: AlbumData) => item.getAlbumID() === id,
    );

    if (!isTrack) return false;

    this.db.albums = this.db.albums.filter((item: AlbumData) => {
      if (item.getAlbumID() !== id) return item;
    });

    return true;
  }
}

export const albumDB = new AlbumDataBase(db);
