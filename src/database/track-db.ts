import { DataBase, db } from './db';
import TrackData from './db/track';
import { Track, TrackDto } from './models/track-models';

export class TrackDataBase {
  private db: DataBase;

  constructor(db: DataBase) {
    this.db = db;
  }

  public getAllTracks(): Array<Track> {
    return this.db.tracks.map((item: TrackData) => item.getTrack());
  }

  public getTrack(id: string): Track | null {
    const track = this.db.tracks.find((item: TrackData) => {
      if (item.getTrackID() === id) return item;
    });

    if (!track) return null;

    return track.getTrack();
  }

  public createTrack(dto: TrackDto): Track {
    const track = new TrackData(dto);

    this.db.tracks.push(track);

    return track.getTrack();
  }

  public updateTrack(id: string, dto: TrackDto): Track | null {
    const track = this.db.tracks.find((item: TrackData) => {
      if (item.getTrackID() === id) return item;
    });

    if (!track) return null;

    return track.updateTrack(dto);
  }

  public deleteTrack(id: string): boolean {
    const isTrack = this.db.tracks.some(
      (item: TrackData) => item.getTrackID() === id,
    );

    if (!isTrack) return false;

    this.db.tracks = this.db.tracks.filter((item: TrackData) => {
      if (item.getTrackID() !== id) return item;
    });

    this.db.favorites.deleteTrackByID(id);

    return true;
  }
}

export const trackDB = new TrackDataBase(db);
