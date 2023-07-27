import ArtistData from './db/artist';
import TrackData from './db/track';
import UserData from './db/user';
import { Album } from './models/album-models';

export class DataBase {
  private users: Array<UserData> = [];
  private artists: Array<ArtistData> = [];
  private albums: Array<Album> = [];
  private tracks: Array<TrackData> = [];

  public getUsers(): Array<UserData> {
    return this.users;
  }
}

export const db = new DataBase();
