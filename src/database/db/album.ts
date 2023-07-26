import { Album, AlbumDto } from '../models/album-models';
import { v4 as uuidv4 } from 'uuid';

export default class AlbumData {
  private id: string; // uuid v4
  private name: string;
  private year: number;
  private artistId: string | null; // refers to Artist

  constructor(album: AlbumDto) {
    this.id = uuidv4();
    this.name = album.name;
    this.year = album.year;
    this.artistId = album.artistId;
  }

  public getAlbumID(): string {
    return this.id;
  }

  public getAlbum(): Album {
    return {
      id: this.id,
      name: this.name,
      year: this.year,
      artistId: this.artistId,
    };
  }

  public updateAlbum(album: Album): boolean {
    if (album.id !== this.id) return false;

    this.name = album.name;
    this.year = album.year;
    this.artistId = album.artistId;

    return true;
  }
}
