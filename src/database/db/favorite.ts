import { Album } from '../models/album-models';
import { Artist } from '../models/artist-models';
import { Favorites } from '../models/favorite-models';
import { Track } from '../models/track-models';
import AlbumData from './album';
import ArtistData from './artist';
import TrackData from './track';

export default class FavoritesData {
  private artists: Artist[] = [];
  private albums: Album[] = [];
  private tracks: Track[] = [];
  private favData: Favorites;

  constructor() {
    this.favData = {
      artists: [],
      albums: [],
      tracks: [],
    };
  }

  public addArtist(artist: ArtistData): void {
    this.artists.push(artist.getArtist());
    this.favData.artists.push(artist.getArtistID());
  }

  public addAlbum(album: AlbumData): void {
    this.albums.push(album.getAlbum());
    this.favData.albums.push(album.getAlbumID());
  }

  public addTrack(track: TrackData): void {
    this.tracks.push(track.getTrack());
    this.favData.tracks.push(track.getTrackID());
  }

  public deleteArtist(artist: ArtistData): boolean {
    if (
      !this.artists.some((item: Artist) => item.id === artist.getArtistID())
    ) {
      return false;
    }

    this.artists = this.artists.filter((item: Artist) => {
      if (item.id !== artist.getArtistID()) return item;
    });

    this.favData.artists = this.favData.artists.filter((item: string) => {
      if (item !== artist.getArtistID()) return item;
    });

    return true;
  }

  public deleteAlbum(album: AlbumData): boolean {
    if (!this.albums.some((item: Album) => item.id === album.getAlbumID())) {
      return false;
    }

    this.albums = this.albums.filter((item: Album) => {
      if (item.id !== album.getAlbumID()) return item;
    });

    this.favData.albums = this.favData.albums.filter((item: string) => {
      if (item !== album.getAlbumID()) return item;
    });

    return true;
  }

  public deleteTrack(track: TrackData): boolean {
    if (!this.tracks.some((item: Track) => item.id === track.getTrackID())) {
      return false;
    }

    this.tracks = this.tracks.filter((item: Track) => {
      if (item.id !== track.getTrackID()) return item;
    });

    this.favData.tracks = this.favData.tracks.filter((item: string) => {
      if (item !== track.getTrackID()) return item;
    });

    return true;
  }

  public deleteArtistByID(id: string): void {
    this.artists = this.artists.filter((artist: Artist) => artist.id !== id);
    this.favData.artists = this.favData.artists.filter((artist: string) => {
      if (artist !== id) return artist;
    });
  }

  public deleteAlbumByID(id: string): void {
    this.albums = this.albums.filter((album: Album) => album.id !== id);
    this.favData.albums = this.favData.albums.filter((album: string) => {
      if (album !== id) return album;
    });
  }

  public deleteTrackByID(id: string): void {
    this.tracks = this.tracks.filter((track: Track) => track.id !== id);
    this.favData.tracks = this.favData.tracks.filter((track: string) => {
      if (track !== id) return track;
    });
  }

  public getArtists(): Array<Artist> {
    return this.artists;
  }

  public getAlbums(): Array<Album> {
    return this.albums;
  }

  public getTracks(): Array<Track> {
    return this.tracks;
  }
}
