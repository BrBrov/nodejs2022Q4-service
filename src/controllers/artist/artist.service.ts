import { Injectable } from '@nestjs/common';
import { ArtistDataBase, artistDB } from 'src/database/artist-db';
import { Artist, ArtistDto } from 'src/database/models/artist-models';

@Injectable()
export default class ArtistService {
  private db: ArtistDataBase = artistDB;

  public getAllArtists(): Array<Artist> {
    return this.db.getAllArtists();
  }

  public getArtist(id: string): Artist | null {
    return this.db.getArtist(id);
  }

  public createArtist(dto: ArtistDto): Artist {
    return this.db.createArtist(dto);
  }

  public updateArtist(id: string, dto: ArtistDto): Artist | null {
    return this.db.updateArtist(id, dto);
  }

  public deleteArtist(id: string): boolean {
    return this.db.deleteArtist(id);
  }
}
