import { Track, TrackDto } from '../models/track-models';
import { v4 as uuidv4 } from 'uuid';

export default class TrackData {
  private id: string;
  private name: string;
  private artistId: string | null;
  private albumId: string | null;
  private duration: number;

  constructor(track: TrackDto) {
    this.id = uuidv4();
    this.name = track.name;
    this.artistId = track.artistId;
    this.albumId = track.albumId;
    this.duration = track.duration;
  }

  public getTrack(): Track {
    return {
      id: this.id,
      name: this.name,
      artistId: this.artistId,
      albumId: this.albumId,
      duration: this.duration,
    };
  }

  public getTrackID(): string {
    return this.id;
  }

  public updateTrack(track: TrackDto): Track {
    this.name = track.name;
    this.artistId = track.artistId;
    this.albumId = track.albumId;
    this.duration = track.duration;

    return this.getTrack();
  }
}
