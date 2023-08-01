import { Artist, ArtistDto } from '../models/artist-models';
import { v4 as uuidv4 } from 'uuid';

export default class ArtistData {
  private id: string;
  private name: string;
  private grammy: boolean;

  constructor(artist: ArtistDto) {
    this.id = uuidv4();
    this.name = artist.name;
    this.grammy = artist.grammy;
  }

  public getArtistID(): string {
    return this.id;
  }

  public getArtist(): Artist {
    return {
      id: this.id,
      name: this.name,
      grammy: this.grammy,
    };
  }

  public updateArtist(artist: ArtistDto): Artist {
    this.name = artist.name;
    this.grammy = artist.grammy;

    return this.getArtist();
  }
}
