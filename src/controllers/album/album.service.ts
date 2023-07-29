import { Injectable } from '@nestjs/common';
import { AlbumDataBase, albumDB } from 'src/database/album-db';
import { Album, AlbumDto } from 'src/database/models/album-models';

@Injectable()
export default class AlbumService {
  private db: AlbumDataBase = albumDB;

  public getAllAlbums(): Array<Album> {
    return this.db.getAllAlbums();
  }

  public getAlbum(id: string): Album | null {
    return this.db.getAlbum(id);
  }

  public createAlbum(dto: AlbumDto): Album {
    return this.db.createAlbum(dto);
  }

  public updateAlbum(id: string, dto: AlbumDto): Album | null {
    return this.db.updateAlbum(id, dto);
  }

  public deleteAlbum(id: string): boolean {
    return this.db.deleteAlbum(id);
  }
}
