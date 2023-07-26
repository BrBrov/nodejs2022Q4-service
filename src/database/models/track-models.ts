export interface Track extends TrackDto {
  id: string; // uuid v4
}

export interface TrackDto {
  name: string;
  artistId: string | null; // refers to Artist
  albumId: string | null; // refers to Album
  duration: number; // integer number
}
