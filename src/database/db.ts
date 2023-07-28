import ArtistData from './db/artist';
import TrackData from './db/track';
import UserData from './db/user';
import { Album } from './models/album-models';

export class DataBase {
  public users: Array<UserData> = [];
  public artists: Array<ArtistData> = [];
  public albums: Array<Album> = [];
  public tracks: Array<TrackData> = [];
}

export const db = new DataBase();
