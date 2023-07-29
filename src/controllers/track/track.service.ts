import { Injectable } from '@nestjs/common';
import { Track, TrackDto } from 'src/database/models/track-models';
import { TrackDataBase, trackDB } from 'src/database/track-db';

@Injectable()
export default class TrackService {
  private db: TrackDataBase = trackDB;

  public getAllTracks(): Array<Track> {
    return this.db.getAllTracks();
  }

  public getTrack(id: string): Track | null {
    return this.db.getTrack(id);
  }

  public createTrack(dto: TrackDto): Track {
    return this.db.createTrack(dto);
  }

  public updateTrack(id: string, dto: TrackDto): Track | null {
    return this.db.updateTrack(id, dto);
  }

  public deleteTrack(id: string): boolean {
    return this.db.deleteTrack(id);
  }
}
