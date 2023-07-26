import { Album } from '../models/album-models';
import { Artist } from '../models/artist-models';
import { Track } from '../models/track-models';

export default class FavoriteData {
  private artists: string[] = [];
  private albums: string[] = [];
  private tracks: string[] = [];

  public addArtist(artist: Artist): boolean {
    if (this.artists.some((item: string) => item === artist.id)) return false;
    this.artists.push(artist.id);

    return true;
  }

  public addAlbum(album: Album): boolean {
    if (this.albums.some((item: string) => item === album.id)) return false;

    this.albums.push(album.id);

    return true;
  }

  public addTrack(track: Track): boolean {
    if (this.tracks.some((item: string) => item === track.id)) return false;

    this.tracks.push(track.id);
    return true;
  }

  public getArtists(): Array<string> {
    return this.artists;
  }

  public getAlbums(): Array<string> {
    return this.albums;
  }

  public getTracks(): Array<string> {
    return this.tracks;
  }
}
