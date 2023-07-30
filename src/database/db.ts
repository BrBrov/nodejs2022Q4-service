import AlbumData from './db/album';
import ArtistData from './db/artist';
import FavoritesData from './db/favorite';
import TrackData from './db/track';
import UserData from './db/user';

export class DataBase {
  public users: Array<UserData> = [];
  public artists: Array<ArtistData> = [];
  public albums: Array<AlbumData> = [];
  public tracks: Array<TrackData> = [];
  public favorites: FavoritesData;

  constructor() {
    this.favorites = new FavoritesData();
  }
}

export const db = new DataBase();
